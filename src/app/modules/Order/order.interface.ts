
export type TOrder = {
  userInfo: {
    fullName: string;
    address: string;
    phone: string;
    email: string;
    paymentMethod?: 'stripe' | 'amerPay' | 'cash'; // Limited to these values
  };
  finalAmount: number;
  status: 'Pending' | 'Paid' | 'Shipped' | 'Completed' | 'Cancelled'; // Restrict status to these values
  paymentStatus: 'Pending' | 'Paid' | 'Failed'; // Restrict paymentStatus to these values
  transactionId: string;
};
