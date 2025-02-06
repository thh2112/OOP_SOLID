import { DiscountType, IDiscount } from "../interfaces/discount.interface";
import { DiscountFactory } from "./discount-factory.service";

export class DiscountService {
  discount: IDiscount | null = null;
}
