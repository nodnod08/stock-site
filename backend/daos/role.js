const collName = "roles";
let collection = null;

export default class RoleDao {
  constructor() {
    this.db = null;
  }
  static async initialize(client, db) {
    client.listCollections({ name: collName }).next(function (err, collinfo) {
      if (!collinfo) {
        client.createCollection(collName, {
          validator: {
            $jsonSchema: {
              bsonType: "object",
              required: ["name"],
              properties: {
                name: {
                  bsonType: "string",
                },
              },
            },
          },
        });
      }
    });

    collection = await client.collection(collName);
    this.db = db;
  }

  static async findRole(query) {
    let response = await collection.findOne(query);

    return response;
  }
}
