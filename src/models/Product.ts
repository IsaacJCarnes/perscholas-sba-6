import { priceRound } from "../utils/priceRound.js";
import { calculateDiscount } from "../utils/discountCalculator.js";
import { calculateTax } from "../utils/taxCalculator.js";

//Product Info interface
export interface ProductInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  sku: string;
}

//Product class with methods for price with discount, tax rate, total cost, and display details.
export class Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  sku: string;

  constructor(info: ProductInfo) {
    this.id = info.id;
    this.title = info.title;
    this.description = info.description;
    this.category = info.category;
    this.price = info.price;
    this.discountPercentage = info.discountPercentage;
    this.sku = info.sku;
    }

  getPriceWithDiscount(): number {
    return this.price - calculateDiscount(this.price, this.discountPercentage);
  }
  getTax(): number {
    return calculateTax(this.getPriceWithDiscount(), this.category);
  }
  getTotal(): number {
    return this.getPriceWithDiscount() + this.getTax();
  }

  displayDetails(): void {
    const paramArray = [
      ["Title", this.title],
      ["ID", this.id],
      ["Description", this.description],
      ["Category", this.category],
      ["SKU", this.sku],
      ["Price", priceRound(this.price)],
      ["Discount", this.discountPercentage+"%"],
      ["Tax", priceRound(this.getTax())],
      ["Total", priceRound(this.getTotal())],
    ];
    paramArray.forEach((param) => {
      console.log(param[0] + ": ", param[1]);
    });
    console.log(`\n`);
  }
}
