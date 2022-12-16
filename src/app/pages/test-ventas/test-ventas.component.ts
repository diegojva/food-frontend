import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { Product } from 'src/app/model/product';
import { SaleDetail } from 'src/app/model/saleDetail';
import { Store } from 'src/app/model/store';
import { CustomerService } from 'src/app/service/customer.service';
import { ProductService } from 'src/app/service/product.service';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'app-test-ventas',
  templateUrl: './test-ventas.component.html',
  styleUrls: ['./test-ventas.component.css']
})
export class TestVentasComponent implements OnInit {

  customers$: Observable<Customer[]>;
  stores$: Observable<Store[]>;
  products$: Observable<Product[]>;

  details: SaleDetail[] = [];

  idCustomerSelected: number;
  idStoreSelected: number;
  product: Product;

  quantity : number;
  price : number;

  constructor(
    private customerService: CustomerService,
    private storeService: StoreService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
   // this.getProducts();
    this.getCustomers();
    this.getStores();
  }

  /*getProducts(){
    this.products$ = this.productService.getAllProducts();
  }*/

  getCustomers(){
    this.customers$ = this.customerService.list();
  }

  getStores(){
    this.stores$ = this.storeService.list();
  }


  operate(){

  }

  addProduct(){
    let det = new SaleDetail();
    det.product = this.product;
    det.price = this.price;
    det.quantity = this.quantity;

    console.log(this.product.name);
    this.details.push(det);
  }

  remove(index: number){

this.details.splice(index, 1);
  }
}
