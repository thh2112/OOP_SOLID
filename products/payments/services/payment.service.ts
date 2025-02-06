import { DiscountFactory } from "../../discounts/services/discount-factory.service";
import { DiscountType } from "../../discounts/interfaces/discount.interface";
import { IPayment, PaymentType } from "../interfaces/payment.interface";
import { PaymentServiceFactory } from "./payment.factory.service";

export class PaymentService {
  private paymentInfo: IPayment | null = null;

  constructor() {}

  async makePayment(
    paymentType: PaymentType,
    paymentInfo: IPayment,
  ): Promise<IPayment> {
    const paymentService = new PaymentServiceFactory().getPaymentService(
      paymentType,
    );

    const _paymentInfo = await paymentService.makePayment(paymentInfo);
    this.paymentInfo = _paymentInfo;
    return this.paymentInfo;
  }

  calculatePayment(paymentType: PaymentType): IPayment {
    let discountType = null;
    if (this.isBlackFriday) {
      discountType = DiscountType.BLACK_FRIDAY_DISCOUNT;
    } else {
      discountType = DiscountType.NO_DISCOUNT;
    }

    const amount = DiscountFactory.getDiscount(discountType).calculateDiscount(
      this.paymentInfo.amount,
    );

    this.paymentInfo.amount = amount;

    return this.paymentInfo;
  }

  getPaymentInfo() {
    return this.paymentInfo;
  }

  private isBlackFriday(): boolean {
    return true;
  }
}
