import { IPayment, IPaymentService } from "../interfaces/payment.interface";
import { IPaypal } from "../interfaces/paypal.interface";

export class PaypalService implements IPaymentService {
  async makePayment(payment: IPaypal): Promise<IPaypal> {
    return payment;
  }
}
