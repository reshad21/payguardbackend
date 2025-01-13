import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PaymentRequestServices } from './request.service';

const createPaymentRequest = catchAsync(async (req, res) => {
    const result = await PaymentRequestServices.createPaymentRequestIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Payment request apeal successfully',
        data: result,
    });
});


const getAllPaymentRequest = catchAsync(async (req, res) => {
    // console.log(req.query);
    const result = await PaymentRequestServices.getAllPaymentRequestIntoDB(req.query);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All Paymentrequest retrieved successfully',
        meta: result.meta,
        data: result.result,
    });
});




const getSinglePaymentRequest = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await PaymentRequestServices.getSinglePaymentRequestIntoDB(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Single payment request retrieved successfully',
        data: result,
    });
});


const approvePayment = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await PaymentRequestServices.approveRequestPaymentService(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Payment request approved successfully',
        data: result,
    });
});

const rejectPayment = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await PaymentRequestServices.rejectRequestPaymentService(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Payment request approved successfully',
        data: result,
    });
});


export const PaymentRequestControllers = {
    createPaymentRequest,
    getAllPaymentRequest,
    getSinglePaymentRequest,
    approvePayment,
    rejectPayment,
};
