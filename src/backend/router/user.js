const express = require("express");
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const User = require("./../models/user");
const { Role } = require("./../models/role");
const jwt = require("jsonwebtoken");
const { authorization } = require("./../config/customMiddlewares");

const router = express.Router();
const saltRounds = 10;
const remember_days = 14;
const not_remember = "1d";

const pathToKey = path.join(__dirname, "..", "utils", "keys", "pri_key.pem");
const pathToPubKey = path.join(__dirname, "..", "utils", "keys", "pub_key.pem");
const PRIVATE_KEY = fs.readFileSync(pathToKey, "utf8");
const PUBLIC_KEY = fs.readFileSync(pathToPubKey, "utf8");

router.post("/register", async (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    bcrypt.hash(password, saltRounds, async function (err, hash) {
      const role = await Role.findOne({ role_name: "regular user" });
      const new_user = new User({
        email,
        password: hash,
        firstName,
        lastName,
        role,
      });

      new_user.save();

      res.send({
        success: true,
        error: false,
        data: null,
        message: `You can login now and manage your account`,
      });
    });
  } else {
    next(new Error("Email is already exist"));
  }
});

router.post("/login", async (req, res, next) => {
  const { email, password, remember } = req.body;

  const opts = {
    algorithm: "RS256",
    expiresIn: remember ? `${remember_days}d` : not_remember,
  };

  function manageAuthCookie(remember, token) {
    if (remember) {
      res.cookie("auth.token", token, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * remember_days),
        httpOnly: process.env.NODE_ENV == "production" ? true : false,
      });
    }
  }

  User.findOne({ email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, async function (err, result) {
        if (result) {
          const details = {
            id: user.id,
            _id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            issue_at: Date.now(),
          };
          const token = await jwt.sign(details, PRIVATE_KEY, opts);
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
        } else {
          next(new Error("Incorrect credentials"));
        }
      });
    } else {
      next(new Error("Incorrect credentials"));
    }
  });
});

router.post("/check-authentication", async (req, res, next) => {
  const { token } = req.body;

  jwt.verify(token, PUBLIC_KEY, function (err, decoded) {
    if (err) {
      next(new Error(err.message));
    } else {
      if (decoded != null && decoded != "undefined" && decoded != undefined) {
        User.findOne({
          email: decoded.email,
          _id: decoded.id,
        }).then((user) => {
          if (user) {
            const details = {
              id: user.id,
              _id: user._id,
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
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
            next(new Error("Unauthorized token"));
          }
        });
      } else {
        next(new Error("Unauthorized token"));
      }
    }
  });
});

module.exports = router;
