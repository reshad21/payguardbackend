import mongoose from 'mongoose';
import { TOrder } from './order.interface'; // Ensure TOrder matches the schema structure

// Sub-schema for userInfo
const userInfoSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true, match: /^[0-9]{10,15}$/ }, // 10-15 digits phone number validation
  email: { type: String, required: true, match: /.+\@.+\..+/ }, // Email validation
  paymentMethod: { type: String, enum: ['stripe', 'amerPay', 'cash'] } // Enum for payment methods
});


// Main order schema
const orderSchema = new mongoose.Schema({
  userInfo: { type: userInfoSchema, required: true }, // Embedding userInfo schema
  finalAmount: { type: Number, required: true, min: 0 }, // finalPrice must be a positive number
  status: {
    type: String,
    enum: ['Pending', 'Paid', 'Shipped', 'Completed', 'Cancelled'], // Restrict to enum values
    default: 'Pending'
  },
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Paid', 'Failed'],
    default: 'Pending'
  },
  transactionId: { type: String, required: true },
},
  { timestamps: true }
);

export const Order = mongoose.model<TOrder>('Order', orderSchema);
