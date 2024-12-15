import { Request, Response } from "express";
import ItemServices from "../services/admin.services";

class ItemController {
  public async ShowAll(req: Request, res: Response) {
    try{
      const items = await ItemServices.ShowAll();
      res.status(200).json({
        data: items
      });
    }
    
    catch (error) {
      if (error instanceof Error) {
        res.status(400).json({
          status: "failed",
          message: error.message,
          data: []
        });
      } else {
        res.status(500).json({
          status: "failed",
          message: "Internal server error while fetching items",
          data: []
        });
      }
    }
  }

  public async AddItem(req: Request, res: Response) {
    try {
      const itemData = req.body;
      const item = await ItemServices.AddItem(itemData);
      res.status(200).json({
        status: "success",
        message: "Item added successfully",
        data: item
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({
          status: "failed",
          message: error.message,
          data: {}
        });
      } else {
        res.status(500).json({
          status: "failed",
          message: "Internal server error while adding item",
          data: {}
        });
      }
    }
  }
}

export default new ItemController();