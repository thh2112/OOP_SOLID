import {
  DiscountStrategy,
  DiscountType,
} from "../interfaces/discount.interface";
import { BlackFridayDiscountStrategy } from "../strategies/back-friday-discount.strategy";
import { MasterCardDiscountStrategy } from "../strategies/master-card-discount.strategy";
import { NoDiscountStrategy } from "../strategies/no-discount.strategy";

export class DiscountFactory {
  static discounts: Record<string, DiscountStrategy> = {
    [DiscountType.NO_DISCOUNT]: new NoDiscountStrategy(),
    [DiscountType.MASTER_CARD_DISCOUNT]: new MasterCardDiscountStrategy(),
    [DiscountType.BLACK_FRIDAY_DISCOUNT]: new BlackFridayDiscountStrategy(),
  };

  constructor() {}

  static getDiscount(type: DiscountType): DiscountStrategy | null {
    return this.discounts[type] || null;
  }
}
