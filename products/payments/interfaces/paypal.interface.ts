import { IPayment } from "./payment.interface";

export interface IPaypal extends IPayment {
  email: string;
  transactionFee: number;
}
