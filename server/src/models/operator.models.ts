import mongoose from "mongoose";

export interface OperatorInter {
    image: string;
    name: string;
    age: string;
    NoTelp: string;
    Email: string;
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

const Operator = mongoose.model("Operators", OperatorSchema);

export default Operator;