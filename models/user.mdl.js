import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: String,
    email: String,
    password: String
});

export default mongoose.model('User', userSchema);