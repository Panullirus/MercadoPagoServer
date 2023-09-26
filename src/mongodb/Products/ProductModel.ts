import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    image: {type: String, required: true},
    rating: {
        rate: {type: Number, required: true},
        count: {type: Number, required: true}
    }
})

export const ProductModel = mongoose.model('Product', ProductSchema);