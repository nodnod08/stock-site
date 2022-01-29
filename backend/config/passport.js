import fs from "fs";
import path from "path";
import { Strategy, ExtractJwt } from "passport-jwt";
import { fileURLToPath } from "url";

import UserDao from "./../daos/user.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToKey = path.join(__dirname, "..", "utils", "keys", "pub_key.pem");
const PUBLIC_KEY = fs.readFileSync(pathToKey, "utf8");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUBLIC_KEY,
  algorithms: ["RS256"],
};

const strategy = new Strategy(opts, async (payload, done) => {
  let user = await UserDao.findUser({ id: payload.id });

  if (user) {
    return done(null, user);
  } else {
    return done(null, false);
    // or you could create a new account
  }
});

export default function (passport) {
  passport.use(strategy);
}
