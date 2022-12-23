import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GenerateOrderService } from 'src/app/service/generate-order.service';
import { LoaderService } from 'src/app/service/loader.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {

  displayedColumns: string[] = ['number', 'product', 'shop', 'date','cant','state','description'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  totalElements: number;

  constructor(public loaderService: LoaderService, private orderService: GenerateOrderService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.orderService.getAllProductsLow().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
