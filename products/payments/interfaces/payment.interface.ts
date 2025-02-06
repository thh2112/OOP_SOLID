enum PaymentType {
  MASTER_CARD = "MASTER_CARD",
  PAYPAL = "PAYPAL",
  BANK_TRANSFER = "BANK_TRANSFER",
}

enum PaymentStatus {
  PENDING = 1,
  APPROVED = 2,
  REJECTED = 3,
}

interface IPayment {
  amount: number;
  paymentMethod: PaymentType;
  status: PaymentStatus;
  transactionId: number;
  timestamp: Date;
}

interface IPaymentService {
  makePayment(payment: IPayment): Promise<IPayment>;
  cancelPayment?(transactionId: string): Promise<boolean>;
}

export { PaymentType, PaymentStatus, IPayment, IPaymentService };
