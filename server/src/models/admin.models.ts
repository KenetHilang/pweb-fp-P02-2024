import mongoose from "mongoose";

export interface ItemInter {
    pic: string;
    name: string;
    amount: string;
    condition: string;
    created_at: Date;
}

const ItemSchema = new mongoose.Schema({
    pic: { 
        type: String, 
        required: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    amount: { 
        type: String, 
        required: true
    },
    condition: { 
        type: String, 
        required: true 
    },
    created_at: { 
        type: Date, 
        default: new Date()
    }
});

const Items = mongoose.model("Items", ItemSchema);

export default Items;