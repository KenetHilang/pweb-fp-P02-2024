import mongoose from "mongoose";

export interface OperatorInter {
    image: string;
    name: string;
    age: string;
    NoTelp: string;
    Email: string;
}

export interface BookingInter {
    item_name: string;
    amount: string;
    borrow_date: Date;
    return_date: Date;
    borrower_name: string;
    officer_name: string;
}

const OperatorSchema = new mongoose.Schema({
    image: { 
        type: String, 
        required: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    age: { 
        type: String, 
        required: true 
    },
    NoTelp: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    }
});


export const Operator = mongoose.model("Operators", OperatorSchema);

export default Operator;