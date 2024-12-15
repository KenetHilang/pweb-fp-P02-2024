import mongoose from "mongoose";

export interface ItemInter {
    name: string;
    amount: string;
    condition: string;
    created_at: Date;
}

const ItemSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
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
        default: Date.now 
    }
});

const Items = mongoose.model("Items", ItemSchema);

export default Items;