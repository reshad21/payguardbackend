/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryBuilder from '../../builder/QueryBuilder';
import PaymentRequest from './request.model';

const createPaymentRequestIntoDB = async (payload: any) => {
    const result = await PaymentRequest.create(payload);
    return result;
};


const getAllPaymentRequestIntoDB = async (query: Record<string, unknown>) => {

    const paymentRequestSearchableFields = ['email'];

    const paymentRequestQuery = new QueryBuilder(PaymentRequest.find(), query).search(paymentRequestSearchableFields).filter().sort().paginate().fields();

    const result = await paymentRequestQuery.modelQuery;
    const meta = await paymentRequestQuery.countTotal();

    return {
        meta,
        result,
    };
}


const getSinglePaymentRequestIntoDB = async (id: string) => {
    const result = await PaymentRequest.findById(id);
    return result;
}

export const approveRequestPaymentService = async (id: string) => {
    const payment = await PaymentRequest.findById(id);

    if (!payment) {
        throw new Error("Payment request not found");
    }

    if (payment.status !== "pending") {
        throw new Error("Only pending requests can be approved");
    }

    const updatedPayment = await PaymentRequest.findByIdAndUpdate(
        id,
        { status: "approved" },
        { new: true } // Return the updated document
    );

    return updatedPayment;
};


export const rejectRequestPaymentService = async (id: string) => {
    const payment = await PaymentRequest.findById(id);

    if (!payment) {
        throw new Error("Payment request not found");
    }

    if (payment.status !== "pending") {
        throw new Error("Only pending requests can be approved");
    }

    const updatedPayment = await PaymentRequest.findByIdAndUpdate(
        id,
        { status: "rejected" },
        { new: true } // Return the updated document
    );

    return updatedPayment;
};


export const PaymentRequestServices = {
    createPaymentRequestIntoDB,
    getAllPaymentRequestIntoDB,
    getSinglePaymentRequestIntoDB,
    approveRequestPaymentService,
    rejectRequestPaymentService
};
