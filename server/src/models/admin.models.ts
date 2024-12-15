import mongoose, { Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
        username: { 
            type: String, 
            required: true 
        },
        password: { 
            type: String, 
            required: true 
        }
    }
)

const users = mongoose.model('Users', UserSchema);

export default users;