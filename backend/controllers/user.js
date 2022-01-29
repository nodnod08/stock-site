import UserDao from "./../daos/user.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { ObjectId } from "mongodb";

const remember_days = 14;
const not_remember = "1d";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToKey = path.join(__dirname, "..", "utils", "keys", "pri_key.pem");
const pathToPubKey = path.join(__dirname, "..", "utils", "keys", "pub_key.pem");
const PRIVATE_KEY = fs.readFileSync(pathToKey, "utf8");
const PUBLIC_KEY = fs.readFileSync(pathToPubKey, "utf8");

export default class UserController {
  static async register(req, res, next) {
    const { email, password, firstName, lastName } = req.body;

    let user = await UserDao.findUser({ email });

    if (user) return next(new Error("Email is already exist"));

    let result = await UserDao.createNewUser(
      email,
      password,
      firstName,
      lastName
    );

    res.send({
      success: true,
      error: false,
      data: null,
      message: `You can login now and manage your account`,
    });
  }

  static async getUserQuery(req, res, next) {
    const { email } = req.body;
    let data = await UserDao.findUser({ email });

    res.send({
      success: true,
      error: false,
      data,
      message: `Looking for user`,
    });
  }

  static async login(req, res, next) {
    const { email, password, remember } = req.body;

    const opts = {
      algorithm: "RS256",
      expiresIn: remember ? `${remember_days}d` : not_remember,
    };

    function manageAuthCookie(remember, token) {
      if (remember) {
        console.log(remember_days);
        res.cookie("auth.token", token, {
          domain: "http://localhost:8080",
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * remember_days),
          httpOnly: process.env.NODE_ENV == "production" ? true : false,
        });
      }
    }

    let user = await UserDao.findUser({ email });

    if (!user) return next(new Error("Incorrect credentials"));

    bcrypt.compare(password, user.password, async function (err, result) {
      if (!result) return next(new Error("Incorrect credentials"));
      const details = {
        id: user.id,
        _id: user._id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        issue_at: Date.now(),
      };
      const token = jwt.sign(details, PRIVATE_KEY, opts);
      manageAuthCookie(remember, token);
      res.send({
        success: true,
        error: false,
        data: {
          details,
          token,
          remember,
        },
        message: `login success`,
      });
    });
  }

  static async checkAuthentication(req, res, next) {
    const { token } = req.body;

    jwt.verify(token, PUBLIC_KEY, async function (err, decoded) {
      if (!err) {
        if (decoded != null && decoded != "undefined" && decoded != undefined) {
          let user = await UserDao.findUser({
            email: decoded.email,
            _id: new ObjectId(decoded._id),
          });
          if (user) {
            const details = {
              id: user.id,
              _id: user._id,
              email: user.email,
              firstName: user.first_name,
              lastName: user.last_name,
            };
            res.send({
              success: true,
              error: false,
              data: {
                details,
              },
              message: `Valid token`,
            });
          } else {
            return next(new Error("Unauthorized token"));
          }
        } else {
          return next(new Error("Unauthorized token"));
        }
      } else {
        return next(new Error(err.message));
      }
    });
  }
}
