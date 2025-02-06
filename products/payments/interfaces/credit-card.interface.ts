import { IPayment } from "./payment.interface";

export interface IBankTransfer extends IPayment {
  bankName: string;
  accountNumber: string;
}
