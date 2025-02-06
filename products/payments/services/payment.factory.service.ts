import { IPaymentService, PaymentType } from "../interfaces/payment.interface";
import { BankTransferService } from "./bank-transfer.service";
import { MasterCardService } from "./master-card.service";
import { PaypalService } from "./paypal.service";

export class PaymentServiceFactory {
  private payment: Record<string, IPaymentService> = {
    [PaymentType.BANK_TRANSFER]: new BankTransferService(),
    [PaymentType.PAYPAL]: new PaypalService(),
    [PaymentType.MASTER_CARD]: new MasterCardService(),
  };

  constructor() {}

  getPaymentService(type: PaymentType): IPaymentService | null {
    if (!type) {
      return null;
    }

    return this.payment[type] || null;
  }
}
