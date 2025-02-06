import { IBankTransfer } from "../interfaces/credit-card.interface";
import { IPayment, IPaymentService } from "../interfaces/payment.interface";

export class BankTransferService implements IPaymentService {
  async makePayment(payment: IBankTransfer): Promise<IBankTransfer> {
    return payment;
  }
}
