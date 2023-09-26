import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    action: {type: String, required: true},
    api_version: {type: String, required: true},
    data: {
        id: {type: String, required: true}
    },
    id: {type: Number, required: true},
    live_mode: {type: Boolean, required: true},
    type: {type: String, required: true},
    user_id: {type: String, required: true}
})

export const PaymentModel = mongoose.model('Payments', PaymentSchema);