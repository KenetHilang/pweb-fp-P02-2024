import Borrowed from "../models/sum.models";
import { BorrowInter } from "../models/sum.models";
import Items from "../models/admin.models";

class BorrowServices {
    async ShowAll() {
        return await Borrowed.find();
    }

    async BorrowItem(borrowData: Partial<BorrowInter>, itemId: string) {
        // Find the item in the Items collection
        const item = await Items.findById(itemId);

        if (!item) {
            throw new Error("Item not found :(");
        }

        // Ensure the item_name in borrowData matches the item name in the database
        if (borrowData.item_name && borrowData.item_name !== item.name) {
            throw new Error("Item name does not match the database entry :(");
        }

        borrowData.return_date = null;

        // Convert borrowed amount and item amount to numbers
        const borrowAmount = parseInt(borrowData.amount || "0", 10);
        const stock = parseInt(item.amount || "0", 10);

        // Check if the item has enough stock to be borrowed
        if (stock < borrowAmount) {
            throw new Error("Not enough stock available :( {stock: " + item.amount + ", borrowAmount: " + borrowAmount + "}");
        }

        // Create a new Borrowed document and save it
        const borrowed = new Borrowed(borrowData);

        // Update the item's stock and save
        item.amount = (stock - borrowAmount).toString(); // Convert back to string if necessary
        await item.save(); // Save the updated item document

        return await borrowed.save(); // Save the borrowed record
    }

    async ReturnItem(borrowId: string) {
        // Find the borrowed item in the Borrowed collection
        const borrowed = await Borrowed.findById(borrowId);

        if (!borrowed) {
            throw new Error("Borrowed item not found :(");
        }

        // Find the item in the Items collection
        const item = await Items.findOne({ name: borrowed.item_name });

        if (!item) {
            throw new Error("Item not found :(");
        }

        if (borrowed.return_date !== null) {
            throw new Error("Item already returned :(");
        }

        // Convert borrowed amount and item amount to numbers
        const borrowAmount = parseInt(borrowed.amount || "0", 10);
        const stock = parseInt(item.amount || "0", 10);

        // Update the item's stock and save
        item.amount = (stock + borrowAmount).toString(); // Convert back to string if necessary
        await item.save(); // Save the updated item document

        // Update the borrowed item's return_date and save
        borrowed.return_date = new Date();
        return await borrowed.save(); // Save the borrowed record
    }
}

export default BorrowServices;
