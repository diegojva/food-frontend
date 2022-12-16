import { Product } from "./product";
import { Sale } from "./sale";

export class SaleDetail{
    id: number;
    sale: Sale;
    product: Product;
    quantity: number;
    price: number;
}