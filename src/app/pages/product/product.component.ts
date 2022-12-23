import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { NotificationDTO } from 'src/app/model/notificationDTO';
import { Product } from 'src/app/model/product';
import { LoaderService } from 'src/app/service/loader.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name_product', 'name_shop', 'stock','actions'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  totalElements: number;


  
  /*notificationDTO: NotificationDTO[] = [
    {id: 1, name_product: 'Coca Cola', name_shop: 'Carrefour', stock: 10, date: '2020-12-12'},
    {id: 2, name_product: 'Coca Cola', name_shop: 'Carrefour', stock: 10, date: '2020-12-12'},
    {id: 3, name_product: 'Coca Cola', name_shop: 'Carrefour', stock: 10, date: '2020-12-12'},
    {id: 4, name_product: 'Coca Cola', name_shop: 'Carrefour', stock: 10, date: '2020-12-12'},
    {id: 5, name_product: 'Coca Cola', name_shop: 'Carrefour', stock: 10, date: '2020-12-12'},
    {id: 6, name_product: 'Coca Cola', name_shop: 'Carrefour', stock: 10, date: '2020-12-12'},
    {id: 7, name_product: 'Inka Cola', name_shop: 'Backups', stock: 60, date: '2020-12-13'},
    {id: 8, name_product: 'Coca Cola', name_shop: 'Carrefour', stock: 10, date: '2020-12-12'},
    {id: 9, name_product: 'Coca Cola', name_shop: 'Carrefour', stock: 10, date: '2020-12-12'},
  ];*/

  constructor(private productService: ProductService, public loaderService: LoaderService,
            private router: Router) {
    
   }

  ngOnInit(): void {
    this.loadData();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadData(){
    this.productService.getAllProductsLow().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
    });
  }

  generate(row: any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "user": JSON.stringify(row)
      }
    };
    this.router.navigate(["/pages/product/generate-order/"],  navigationExtras);
  }

}
