import ItemDao from "./../daos/item.js";
import UserDao from "./../daos/user.js";

import fs from "fs";
import path from "path";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import { fileURLToPath } from "url";
import { ObjectId } from "mongodb";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToKey = path.join(__dirname, "..", "utils", "keys", "pri_key.pem");
const pathToPubKey = path.join(__dirname, "..", "utils", "keys", "pub_key.pem");
const PRIVATE_KEY = fs.readFileSync(pathToKey, "utf8");
const PUBLIC_KEY = fs.readFileSync(pathToPubKey, "utf8");

export default class ItemController {
  static async postItem(req, res, next) {
    const fileStorage = multer.diskStorage({
      destination: (req, file, cb) => {
        // order of form data matters, so if you want to access some field immediately,
        // ofcourse you have to put it first in form data append
        const directory = path.join(
          __dirname,
          "..",
          "..",
          "frontend",
          "public",
          "assets",
          "files",
          "protected",
          `user_${req.body.user_id}`,
          `${req.body.category}`
        );

        if (!fs.existsSync(directory))
          fs.mkdirSync(directory, { recursive: true });

        cb(null, directory);
      },
      filename: (req, file, cb) => {
        let newFilename =
          file.originalname.split(".")[0] +
          "-" +
          uuidv4() +
          path.extname(file.originalname);

        cb(null, newFilename);
      },
    });

    const fileFilter = (req, file, cb) => {
      if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(new Error("Only image file is acceptable"));
      }
    };

    const upload = multer({
      storage: fileStorage,
      limits: {
        fileSize: "50mb",
      },
      fileFilter,
    }).fields([
      {
        name: "image",
        maxCount: 1,
      },
      {
        name: "image2",
        maxCount: 1,
      },
    ]);

    upload(req, res, async (err) => {
      // you should access the req body here, in outside its null

      const {
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
      } = req.body;

      if (err) return next(new Error(err.message));

      let user = await UserDao.findUser({
        _id: new ObjectId(req.body.user_id),
      });

      if (!user) return next(new Error("User is not valid to post item"));

      let create = await ItemDao.createItem({
        user_id: user._id,
        category,
        made_in,
        brand,
        months_of_use: Number(months_of_use),
        status,
        mall_store_price: String(Number(mall_store_price).toFixed(2)),
        serial_number,
        model_number,
        product_name,
        product_code,
        length,
        width,
        color,
        weight,
        price: String(Number(price).toFixed(2)),
        discount: String(Number(discount).toFixed(2)),
        voucher,
        quantity: Number(quantity),
        is_on_stock,
        supply_delivery_interval,
        image: {
          filename: req.files.image[0].filename,
          directory: req.files.image[0].destination,
        },
        image2: {
          filename: req.files.image2[0].filename,
          directory: req.files.image2[0].destination,
        },
      });

      if (typeof create != "boolean") return next(new Error(create.message));
      res.send({
        message: "Item has been successfuly posted",
        success: true,
      });
    });
  }
}
