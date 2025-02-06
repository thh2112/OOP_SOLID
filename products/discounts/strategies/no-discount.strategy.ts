import { DiscountStrategy } from "../interfaces/discount.interface";

export class NoDiscountStrategy implements DiscountStrategy {
  calculateDiscount(amount: number): number {
    return amount;
  }
}
