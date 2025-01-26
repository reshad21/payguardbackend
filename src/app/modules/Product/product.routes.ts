import express from 'express';
import { ProductControllers } from './product.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
    '/',
    auth(USER_ROLE.admin),
    // validateRequest(PaymentRequestValidation.paymentRequestValidationSchema),
    ProductControllers.createProduct
);


router.get(
    '/',
    ProductControllers.getAllProduct
);


router.get(
    '/:id',
    ProductControllers.getSingleProduct
);


// Approve a payment request
// router.patch(
//     "/:id/approve",
//     ProductControllers.approvePayment
// );

// Reject a payment request
// router.patch(
//     "/:id/reject",
//     ProductControllers.rejectPayment
// );


export const ProductRoutes = router;
