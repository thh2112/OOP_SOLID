import { MasterCardDiscountStrategy } from "../../discounts/strategies/master-card-discount.strategy";
import { IMasterCard } from "../interfaces/master-card.interface";
import { IPaymentService } from "../interfaces/payment.interface";

export class MasterCardService implements IPaymentService {
  async makePayment(payment: IMasterCard): Promise<IMasterCard> {
    const masterCardDiscountStrategy = new MasterCardDiscountStrategy();
    const _amount = (payment.amount =
      masterCardDiscountStrategy.calculateDiscount(payment.amount));
    payment.amount = _amount;
    return payment;
  }
}
