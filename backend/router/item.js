import { Router } from "express";
import ItemController from "./../controllers/item.js";
import { authorization } from "./../config/customMiddlewares.js";

const router = Router();

router.post("/post-item", authorization, ItemController.postItem);

export default router;
