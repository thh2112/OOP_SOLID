import { DiscountStrategy, IDiscount } from "../interfaces/discount.interface";

export class BlackFridayDiscountStrategy implements DiscountStrategy {
  calculateDiscount(amount: number): number {
    return amount * 0.6;
  }
}
