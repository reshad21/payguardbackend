import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductServices } from './product.service';

const createProduct = catchAsync(async (req, res) => {
    const result = await ProductServices.createProductIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product created successfully',
        data: result,
    });
});


const getAllProduct = catchAsync(async (req, res) => {
    // console.log(req.query);
    const result = await ProductServices.getAllProductFromDB(req.query);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All Product retrieved successfully',
        meta: result.meta,
        data: result.result,
    });
});




const getSingleProduct = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProductServices.getSingleProductIntoDb(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Single product retrieved successfully',
        data: result,
    });
});


// const approvePayment = catchAsync(async (req, res) => {
//     const { id } = req.params;
//     const result = await PaymentRequestServices.approveRequestPaymentService(id);

//     sendResponse(res, {
//         statusCode: httpStatus.OK,
//         success: true,
//         message: 'Payment request approved successfully',
//         data: result,
//     });
// });

// const rejectPayment = catchAsync(async (req, res) => {
//     const { id } = req.params;
//     const result = await PaymentRequestServices.rejectRequestPaymentService(id);

//     sendResponse(res, {
//         statusCode: httpStatus.OK,
//         success: true,
//         message: 'Payment request approved successfully',
//         data: result,
//     });
// });


export const ProductControllers = {
    createProduct,
    getAllProduct,
    getSingleProduct,
};
