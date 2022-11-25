import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'category', 'stock', 'measureUnit', 'photo', 'actions'];
  dataSource: MatTableDataSource<Product>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  totalElements: number;

  constructor(private snackBar: MatSnackBar,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.productChange.subscribe(data => {
      this.createTable(data);
    });

    this.productService.getMessageChange().subscribe(data => {
      this.snackBar.open(data, 'INFO', { duration: 2000, verticalPosition: "top", horizontalPosition: "right" });
    });

    this.productService.listPageable(0, 3).subscribe(data => {
      this.createTable(data);
    });

  }

  applyFilter(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }

  /*delete(idPatient: number){
    this.productService.delete(idPatient).pipe(switchMap( ()=> {
      return this.patientService.findAll();
    }))
    .subscribe(data => {
      this.patientService.patientChange.next(data);
      this.patientService.setMessageChange('DELETED!');
    })
    ;
  }*/

  createTable(products: any){
    this.dataSource = new MatTableDataSource(products.content);    
    this.totalElements = products.totalElements;
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;        
  }

  showMore(e: any){
    this.productService.listPageable(e.pageIndex, e.pageSize).subscribe(data => this.createTable(data));
  }

}
