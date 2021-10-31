const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const user = require("./backend/router/user");
const { errorHandler } = require("./backend/config/customMiddlewares");

// const SequelizeStore = require("connect-session-sequelize")(session.Store);
// const store = new SequelizeStore({
//   db: sequelize,
//   checkExpirationInterval: 1000 * 60 * 10, // every 10 minutes
// });
// store.sync();
const app = express();
const port = process.env.PORT;

// app.use(
//   session({
//     secret: "SPECIAL SECRET",
//     store: new SequelizeStore({
//       db: sequelize,
//     }),
//     saveUninitialized: true,
//     resave: false,
//     proxy: false,
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 24 * 14, // 14 days
//     },
//   })
// );
app.use(express.json({ type: "*/*" }));
app.use(cors());
app.use(
  express.static(process.env.NODE_ENV == "development" ? "dist" : "public")
);
app.use(
  [
    "/create-account",
    "/login",
    "/docs",
    "/pricing",
    "/projects",
    "/how-it-works",
  ],
  express.static(process.env.NODE_ENV == "development" ? "dist" : "public")
);
// routers
app.use("/api/user", user);
app.use(errorHandler);

mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.listen(port, async () => {
  console.log(`⚡ Server is now running on port ${port}`);
});
