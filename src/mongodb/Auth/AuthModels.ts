import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    phone: {type: Number, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    purchases: {type: Array, required: false},
    cart: {type: Array, required: false}
})

export const AuthtModel = mongoose.model('Users', AuthSchema);