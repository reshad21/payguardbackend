import mongoose, { Schema } from 'mongoose';
import { TProduct } from './product.interface';


const ProductSchema: Schema = new Schema<TProduct>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        image: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model<TProduct>('Product', ProductSchema);

export default Product;
