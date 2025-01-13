
// export type PaymentRequest = {
//     title: string;
//     amount: number;
//     email: string | undefined;  // If user.email can be undefined, this ensures the type is correct.
//     status: "pending" | "approved" | "rejected";  // Define status options as a union type.
// }


export type TPaymentRequest = {
    title: string;
    amount: number;
    email: string | undefined; // user?.email can be undefined
    status: "pending" | "approved" | "rejected"; // status is one of these values
};

