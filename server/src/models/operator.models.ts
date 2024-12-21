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

const bookingDataSchema = new mongoose.Schema({
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
        required: true
    },
    return_date: {
        type: Date,
        required: true
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

export const Operator = mongoose.model("Operators", OperatorSchema);
export const Booking = mongoose.model("Bookings", bookingDataSchema);

export default Operator;