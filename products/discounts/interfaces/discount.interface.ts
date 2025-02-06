export enum DiscountType {
  NO_DISCOUNT = "NO_DISCOUNT",
  MASTER_CARD_DISCOUNT = "MASTER_CARD_DISCOUNT",
  BLACK_FRIDAY_DISCOUNT = "BACK_FRIDAY_DISCOUNT",
}

export interface IDiscount {
  name: string;
  discount: number;
  description: string;
  isExpired: boolean;
}

export interface DiscountStrategy {
  calculateDiscount(amount: number): number;
}
