const express = require("express");
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const User = require("./../models/user");
const { Role } = require("./../models/role");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const router = express.Router();
const saltRounds = 10;

const pathToKey = path.join(__dirname, "..", "utils", "keys", "pri_key.pem");
const PRIVATE_KEY = fs.readFileSync(pathToKey, "utf8");

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
  const { email, password } = req.body;
  const opts = {
    algorithm: "RS256",
    expiresIn: 10000,
  };
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
          };
          const token = await jwt.sign(details, PRIVATE_KEY, opts);

          res.send({
            success: true,
            error: false,
            data: {
              details,
              token,
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

router.get(
  "/test",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    res.send({
      success: true,
    });
  }
);

module.exports = router;
