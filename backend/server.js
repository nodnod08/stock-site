import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import passport from "passport";
import dotenv from "dotenv";
import passportConfig from "./config/passport.js";
import { errorHandler } from "./config/customMiddlewares.js";
import userRoute from "./router/user.js";

dotenv.config();

const app = express();

app.use(cookieParser());

app.use(express.json({ type: "*/*" }));

app.use(cors());

passportConfig(passport);

app.use(passport.initialize());

app.use("/api/user", userRoute);

app.use("*", (req, res, next) =>
  res.status(404).json({
    error: "Page Not Found",
  })
);

app.use(errorHandler);

export default app;
