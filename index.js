import app from "./backend/server.js";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

import RoleDao from "./backend/daos/role.js";
import UserDao from "./backend/daos/user.js";

dotenv.config();

const port = process.env.PORT;

MongoClient.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .catch((err) => {
    console.error(err);
  })
  .then(async (client) => {
    console.log(`\n✔️  MONGODB Client is now ready to use `);

    // insert DAO here
    RoleDao.initialize(client.db(), client);
    UserDao.initialize(client.db(), client);

    app.listen(port, () =>
      console.log(`⚡ Server is now running on port ${port} \n`)
    );
  });
