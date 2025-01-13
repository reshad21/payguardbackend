import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { PaymentRequestControllers } from './request.controller';
import { PaymentRequestValidation } from './request.validation';

const router = express.Router();

router.post(
    '/',
    // auth(USER_ROLE.user, USER_ROLE.admin),
    validateRequest(PaymentRequestValidation.paymentRequestValidationSchema),
    PaymentRequestControllers.createPaymentRequest
);


router.get(
    '/',
    PaymentRequestControllers.getAllPaymentRequest
);


router.get(
    '/:id',
    PaymentRequestControllers.getSinglePaymentRequest
);


// Approve a payment request
router.patch(
    "/:id/approve",
    PaymentRequestControllers.approvePayment
);

// Reject a payment request
router.patch(
    "/:id/reject",
    PaymentRequestControllers.rejectPayment
);


export const PaymentRequestRoutes = router;
