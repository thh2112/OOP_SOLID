// 2 types payments: CreditCard, Paypal -- Done
// Task 1: Add new payment type: Master Card -- Done
// Task 2: If user choose payment type Master Card, then add 5% discount -- Done
// Task 3: Calculate total price with discount for each payment type -- Done
// Use case: today is back friday, so add 40% discount for all payments and show total price with discount for each payment type

import { IBankTransfer } from "./interfaces/credit-card.interface";
import { IMasterCard } from "./interfaces/master-card.interface";
import { PaymentStatus, PaymentType } from "./interfaces/payment.interface";
import { IPaypal } from "./interfaces/paypal.interface";
import { PaymentService } from "./services/payment.service";

const bankTransferPaymentInfo: IBankTransfer = {
  amount: 100,
  paymentMethod: PaymentType.BANK_TRANSFER,
  status: PaymentStatus.PENDING,
  transactionId: 1,
  timestamp: new Date(),
  bankName: "ACB",
  accountNumber: "123456789",
};

const paypalPaymentInfo: IPaypal = {
  amount: 100,
  paymentMethod: PaymentType.PAYPAL,
  status: PaymentStatus.PENDING,
  transactionId: 1,
  timestamp: new Date(),
  email: "V5tHt@example.com",
  transactionFee: 10,
};

const masterCardPaymentInfo: IMasterCard = {
  amount: 100,
  paymentMethod: PaymentType.MASTER_CARD,
  status: PaymentStatus.PENDING,
  transactionId: 1,
  timestamp: new Date(),
  cardNumber: 123456789,
  cardHolderName: "John Doe",
  expiryDate: "12/2022",
  cvv: "123",
};

const paymentService = new PaymentService();

async function processPayment() {
  await paymentService.makePayment(
    PaymentType.MASTER_CARD,
    masterCardPaymentInfo,
  );
  paymentService.calculatePayment(PaymentType.MASTER_CARD);
  console.log(paymentService.getPaymentInfo());
}

processPayment();
