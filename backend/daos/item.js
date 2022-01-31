import bcrypt from "bcrypt";
import UserDao from "./user.js";

const collName = "items";
const saltRounds = 10;
let collection = null;

export default class ItemDao {
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
                  "primaryDetails",
                  "mainSpec",
                  "priceAndSupply",
                  "user_id",
                ],
                properties: {
                  primaryDetails: {
                    required: [
                      "category",
                      "brand",
                      "made_in",
                      "months_of_use",
                      "status",
                      "mall_store_price",
                      "serial_number",
                      "model_number",
                    ],
                    bsonType: "object",
                    properties: {
                      category: {
                        bsonType: "string",
                        description: "must be a string if the field exists",
                      },
                      brand: {
                        bsonType: "string",
                        description: "must be a string if the field exists",
                      },
                      made_in: {
                        bsonType: "string",
                        description: "must be a string if the field exists",
                      },
                      months_of_use: {
                        bsonType: "int",
                        description: "must be a integer if the field exists",
                      },
                      status: {
                        bsonType: "string",
                        description: "must be a string if the field exists",
                      },
                      mall_store_price: {
                        bsonType: "string",
                        description: "must be a string if the field exists",
                      },
                      serial_number: {
                        bsonType: "string",
                        description: "must be a string if the field exists",
                      },
                      model_number: {
                        bsonType: "string",
                        description: "must be a string if the field exists",
                      },
                    },
                  },
                  mainSpec: {
                    required: [
                      "product_name",
                      "product_code",
                      "length",
                      "width",
                      "color",
                      "weight",
                      "image",
                      "image2",
                    ],
                    bsonType: "object",
                    properties: {
                      product_name: {
                        bsonType: "string",
                        description: "must be a string if the field exists",
                      },
                      product_code: {
                        bsonType: "string",
                        description: "must be a string if the field exists",
                      },
                      length: {
                        bsonType: "string",
                        description: "must be a string if the field exists",
                      },
                      width: {
                        bsonType: "string",
                        description: "must be a string if the field exists",
                      },
                      color: {
                        bsonType: "string",
                        description: "must be a string if the field exists",
                      },
                      weight: {
                        bsonType: "string",
                        description: "must be a string if the field exists",
                      },
                      image: {
                        bsonType: "object",
                        required: ["filename", "directory"],
                        properties: {
                          filename: {
                            bsonType: "string",
                            description: "must be a string if the field exists",
                          },
                          directory: {
                            bsonType: "string",
                            description: "must be a string if the field exists",
                          },
                        },
                      },
                      image2: {
                        bsonType: "object",
                        required: ["filename", "directory"],
                        properties: {
                          filename: {
                            bsonType: "string",
                            description: "must be a string if the field exists",
                          },
                          directory: {
                            bsonType: "string",
                            description: "must be a string if the field exists",
                          },
                        },
                      },
                    },
                  },
                  priceAndSupply: {
                    bsonType: "object",
                    required: [
                      "price",
                      "discount",
                      "quantity",
                      "is_on_stock",
                      "supply_delivery_interval",
                    ],
                    properties: {
                      price: {
                        bsonType: "string",
                        description: "must be a string if the field exists",
                      },
                      discount: {
                        bsonType: "string",
                        description: "must be a string if the field exists",
                      },
                      voucher: {
                        bsonType: "string",
                        description: "must be a string if the field exists",
                      },
                      quantity: {
                        bsonType: "int",
                        description: "must be a integer if the field exists",
                      },
                      is_on_stock: {
                        bsonType: "string",
                        description: "must be a string if the field exists",
                      },
                      supply_delivery_interval: {
                        bsonType: "string",
                        description: "must be a string if the field exists",
                      },
                    },
                  },
                  user_id: {
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

  static async createItem(params) {
    const {
      user_id,
      category,
      made_in,
      brand,
      months_of_use,
      status,
      mall_store_price,
      serial_number,
      model_number,
      product_name,
      product_code,
      length,
      width,
      color,
      weight,
      price,
      discount,
      voucher,
      quantity,
      is_on_stock,
      supply_delivery_interval,
      image,
      image2,
    } = params;

    let response = await collection
      .insertOne({
        user_id,
        primaryDetails: {
          category,
          made_in,
          brand,
          months_of_use,
          status,
          mall_store_price,
          serial_number,
          model_number,
        },
        mainSpec: {
          product_name,
          product_code,
          length,
          width,
          color,
          weight,
          image: {
            filename: image.filename,
            directory: image.directory,
          },
          image2: {
            filename: image2.filename,
            directory: image2.directory,
          },
        },
        priceAndSupply: {
          price,
          discount,
          voucher,
          quantity,
          is_on_stock,
          supply_delivery_interval,
        },
      })
      .then(() => true)
      .catch((e) => {
        console.log(e);
        return e;
      });

    return response;
  }
}
