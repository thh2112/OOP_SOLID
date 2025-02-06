import { IPayment } from "./payment.interface";

export interface IMasterCard extends IPayment {
  cardNumber: number;
  cardHolderName: string;
  expiryDate: string; // MM/YY format
  cvv: string;
}
