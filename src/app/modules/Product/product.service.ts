/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryBuilder from '../../builder/QueryBuilder';
import Product from './product.model';

const createProductIntoDB = async (payload: any) => {
    const result = await Product.create(payload);
    return result;
};


const getAllProductFromDB = async (query: Record<string, unknown>) => {

    const productSearchableFields = ['name'];

    const productQuery = new QueryBuilder(Product.find(), query).search(productSearchableFields).filter().sort().paginate().fields();

    const result = await productQuery.modelQuery;
    const meta = await productQuery.countTotal();

    return {
        meta,
        result,
    };
}


const getSingleProductIntoDb = async (id: string) => {
    const result = await Product.findById(id);
    return result;
}

// export const approveRequestPaymentService = async (id: string) => {
//     const payment = await PaymentRequest.findById(id);

//     if (!payment) {
//         throw new Error("Payment request not found");
//     }

//     if (payment.status !== "pending") {
//         throw new Error("Only pending requests can be approved");
//     }

//     const updatedPayment = await PaymentRequest.findByIdAndUpdate(
//         id,
//         { status: "approved" },
//         { new: true } // Return the updated document
//     );

//     return updatedPayment;
// };


// export const rejectRequestPaymentService = async (id: string) => {
//     const payment = await PaymentRequest.findById(id);

//     if (!payment) {
//         throw new Error("Payment request not found");
//     }

//     if (payment.status !== "pending") {
//         throw new Error("Only pending requests can be approved");
//     }

//     const updatedPayment = await PaymentRequest.findByIdAndUpdate(
//         id,
//         { status: "rejected" },
//         { new: true } // Return the updated document
//     );

//     return updatedPayment;
// };


export const ProductServices = {
    createProductIntoDB,
    getAllProductFromDB,
    getSingleProductIntoDb,
};
