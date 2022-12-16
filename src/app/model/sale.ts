import { Customer } from "./customer";
import { Product } from "./product";
import { Store } from "./store";

export class Sale{
    id: number;
    customer: Customer;
    store: Store;
    products: Product[];
}