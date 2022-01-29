import { Router } from "express";
import UserController from "./../controllers/user.js";

const router = Router();

router.post("/register", UserController.register);
router.post("/find-user", UserController.getUserQuery);
router.post("/login", UserController.login);
router.post("/check-authentication", UserController.checkAuthentication);

export default router;
