import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { Product } from 'src/app/model/product';
import { SaleDetail } from 'src/app/model/saleDetail';
import { Store } from 'src/app/model/store';
import { CustomerService } from 'src/app/service/customer.service';
import { LoaderService } from 'src/app/service/loader.service';
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
  products : any[] = [1,2];

  details: SaleDetail[] = [];

  idCustomerSelected: number;
  idStoreSelected: number;
  product: Product;

  idTienda : any;
  idProducts : any;

  constructor(
    private customerService: CustomerService,
    private storeService: StoreService,
    protected loaderService: LoaderService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
   // this.getProducts();
    this.getCustomers();
    this.getStores();
  }


  getCustomers(){
    this.customers$ = this.customerService.list();
  }

  getStores(){
    this.stores$ = this.storeService.list();
  }


  operate(){
    this.storeService.simulateSale(this.idTienda, this.idProducts).subscribe({
      next: (data) => {
        this.snackBar.open('El resultado de la simulación fue: '+ data + '.', 'INFO', { duration: 4000 });
        if(data){
          setTimeout(() => {
            this.router.navigate(['/pages/notifications']);
          }, 2000);
        }
      }
    });
  }

  addProduct(){

  }


}
