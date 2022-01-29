import bcrypt from "bcrypt";
import RoleDao from "./role.js";

const collName = "users";
const saltRounds = 10;
let collection = null;

export default class UserDao {
  constructor() {
    this.db = null;
  }

  static async initialize(client, db) {
    client
      .listCollections({ name: collName })
      .next(async function (err, collinfo) {
        if (!collinfo) {
          await client.createCollection(collName, {
            validator: {
              $jsonSchema: {
                bsonType: "object",
                required: [
                  "first_name",
                  "last_name",
                  "email",
                  "password",
                  "role_id",
                ],
                properties: {
                  first_name: {
                    bsonType: "string",
                  },
                  last_name: {
                    bsonType: "string",
                  },
                  email: {
                    bsonType: "string",
                  },
                  password: {
                    bsonType: "string",
                  },
                  role_id: {
                    bsonType: "objectId",
                  },
                },
              },
            },
          });
        }
      });

    collection = client.collection(collName);
    this.db = db;
  }

  static async findUser(query) {
    let response = await collection
      .aggregate([
        { $match: { ...query } },
        {
          $lookup: {
            from: "roles",
            localField: "role_id",
            foreignField: "_id",
            as: "role",
          },
        },
      ])
      .next();

    return response;
  }

  static async createNewUser(email, password, firstName, lastName) {
    let role = await RoleDao.findRole({ name: "Administrator" });

    return bcrypt.hash(password, saltRounds, async function (err, hash) {
      collection.insertOne({
        first_name: firstName,
        last_name: lastName,
        email,
        password: hash,
        role_id: role._id,
      });

      return true;
    });
  }
}
