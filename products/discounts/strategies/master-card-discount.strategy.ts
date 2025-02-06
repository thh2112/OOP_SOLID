import { DiscountStrategy } from "../interfaces/discount.interface";

export class MasterCardDiscountStrategy implements DiscountStrategy {
  calculateDiscount(amount: number): number {
    return amount * 0.95;
  }
}
