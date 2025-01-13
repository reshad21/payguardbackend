import mongoose, { Schema } from "mongoose";
import { TPaymentRequest } from "./request.interface";


// Define the schema for the PaymentRequest
const paymentRequestSchema = new Schema<TPaymentRequest>({
    title: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending",
    },
}, {
    timestamps: true,  // Automatically add createdAt and updatedAt fields
});

// Create the model from the schema
const PaymentRequest = mongoose.model<TPaymentRequest>("PaymentRequest", paymentRequestSchema);

export default PaymentRequest;
