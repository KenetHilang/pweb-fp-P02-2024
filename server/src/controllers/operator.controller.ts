import { Request, Response } from "express";
import OperatorServices from "../services/operator.services";

class OperatorController {
    public async ShowAll(req: Request, res: Response) {
        try {
            const operators = await OperatorServices.ShowAll();
            res.status(200).json({
                data: operators
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
                    message: "Internal server error while fetching operators",
                    data: []
                });
            }
        }
    }

    public async AddOperator(req: Request, res: Response) {
        try {
            const operatorData = req.body;
            const operator = await OperatorServices.AddOperator(operatorData);
            res.status(200).json({
                status: "success",
                message: "Operator added successfully",
                data: operator
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
                    message: "Internal server error while adding operator",
                    data: {}
                });
            }
        }
    }

    public async UpdateOperator(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const operatorData = req.body;
            const updatedOperator = await OperatorServices.UpdateOperator(id, operatorData);
            res.status(200).json({
                status: "success",
                message: "Operator updated successfully",
                data: updatedOperator
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
                    message: "Internal server error while updating operator",
                    data: {}
                });
            }
        }
    }

    public async DeleteOperator(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const deletedOperator = await OperatorServices.DeleteOperator(id);
            res.status(200).json({
                status: "success",
                message: "Operator deleted successfully",
                data: deletedOperator
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
                    message: "Internal server error while deleting operator",
                    data: {}
                });
            }
        }
    }

    public async BookEquipment(req: Request, res: Response) {
        try {
            const bookingData = req.body;
            const booking = await OperatorServices.BookEquipment(bookingData);
            res.status(200).json({
                status: "success",
                message: "Equipment booked successfully",
                data: booking
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
                    message: "Internal server error while booking equipment",
                    data: {}
                });
            }
        }
    }

    public async GetAllEquipment(req: Request, res: Response) {
        try {
            const bookings = await OperatorServices.GetAllEquipment();
            res.status(200).json({
                status: "success",
                message: "Equipment bookings retrieved successfully",
                data: bookings
            });
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({
                    status: "failed",
                    message: error.message,
                    data: []
                });
            } else {
                res.status(500).json({
                    status: "failed",
                    message: "Internal server error while fetching equipment bookings",
                    data: []
                });
            }
        }
    }
}

export default new OperatorController();