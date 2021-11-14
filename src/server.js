const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const dotenv = require("dotenv");
dotenv.config();
const user = require("./backend/router/user");
const { errorHandler } = require("./backend/config/customMiddlewares");

const app = express();
app.use(cookieParser());
const port = process.env.PORT;

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
    "/post-item",
  ],
  express.static(process.env.NODE_ENV == "development" ? "dist" : "public")
);

require("./backend/config/passport")(passport);
app.use(passport.initialize());
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
