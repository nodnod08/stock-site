import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import passport from "passport";
import dotenv from "dotenv";
import passportConfig from "./config/passport.js";
import { errorHandler } from "./config/customMiddlewares.js";
import userRoute from "./router/user.js";
import itemRoute from "./router/item.js";

dotenv.config();

const app = express();

app.use(cookieParser());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "HEAD, OPTIONS, GET, POST, PUT, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(express.json());

app.use(cors());

passportConfig(passport);

app.use(passport.initialize());

app.use("/api/user", userRoute);
app.use("/api/item", itemRoute);

app.use("*", (req, res, next) =>
  res.status(404).json({
    error: "Page Not Found",
  })
);

app.use(errorHandler);

export default app;
