import mongoose from "mongoose";

export interface BorrowInter {
	item_name: string;
	amount: string;
	borrow_date: Date;
	return_date?: Date | null;
	borrower_name: string;
	officer_name: string;
}

const BorrowSchema = new mongoose.Schema({
    item_name: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    borrow_date: {
        type: Date,
        default: new Date()
    },
    return_date: {
        type: Date,
        default: null
    },
    borrower_name: {
        type: String,
        required: true
    },
    officer_name: {
        type: String,
        required: true
    }
});

const Borrowed = mongoose.model("Borrowed", BorrowSchema);

export default Borrowed;