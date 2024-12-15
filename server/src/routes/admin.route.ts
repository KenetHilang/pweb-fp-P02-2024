import express from "express";
import ItemController from "../controllers/admin.controller";
const router = express.Router();

router.get("/", ItemController.ShowAll);
router.post("/", ItemController.AddItem);

export default router;