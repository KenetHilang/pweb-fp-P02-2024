import express from "express";
import OperatorController from "../controllers/operator.controller";
const router = express.Router();

router.get("/", OperatorController.ShowAll);
router.post("/", OperatorController.AddOperator);
router.put("/:id", OperatorController.UpdateOperator);
router.delete("/:id", OperatorController.DeleteOperator);

// nomor 3 (azza)
router.post("/book-equipment", OperatorController.BookEquipment);

router.get("/all-equipment", OperatorController.GetAllEquipment);

export default router;