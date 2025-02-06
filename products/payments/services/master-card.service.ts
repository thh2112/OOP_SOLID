import { DiscountFactory } from "../../discounts/services/discount-factory.service";
import { IMasterCard } from "../interfaces/master-card.interface";
import { IPaymentService } from "../interfaces/payment.interface";
import { DiscountType } from "../../discounts/interfaces/discount.interface";

export class MasterCardService implements IPaymentService {
  async makePayment(payment: IMasterCard): Promise<IMasterCard> {
    const discount = DiscountFactory.getDiscount(
      DiscountType.MASTER_CARD_DISCOUNT,
    );

    payment.amount = discount.calculateDiscount(payment.amount);
    return payment;
  }
}
