import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userId: {type: Number, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    type: {type: String, required: true, default:'user' }

});

const User = mongoose.model('user', userSchema);

export default User;