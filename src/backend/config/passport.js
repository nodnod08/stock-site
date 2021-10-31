const fs = require("fs");
const path = require("path");
// import User from "../models/user";

const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

const pathToKey = path.join(__dirname, "..", "utils", "keys", "pub_key.pem");
const PUBLIC_KEY = fs.readFileSync(pathToKey, "utf8");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUBLIC_KEY,
  algorithms: ["RS256"],
};

const strategy = new JwtStrategy(opts, (payload, done) => {});

module.exports = (passport) => {
  passport.use(strategy);
};
