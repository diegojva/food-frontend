import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationDTO } from 'src/app/model/notificationDTO';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name_product', 'name_shop', 'stock','date','actions'];
  dataSource: MatTableDataSource<any>;
  
  notificationDTO: NotificationDTO[] = [
    {id: 1, name_product: 'Coca Cola', name_shop: 'Carrefour', stock: 10, date: '2020-12-12'},
    {id: 2, name_product: 'Coca Cola', name_shop: 'Carrefour', stock: 10, date: '2020-12-12'},
    {id: 3, name_product: 'Coca Cola', name_shop: 'Carrefour', stock: 10, date: '2020-12-12'},
    {id: 4, name_product: 'Coca Cola', name_shop: 'Carrefour', stock: 10, date: '2020-12-12'},
    {id: 5, name_product: 'Coca Cola', name_shop: 'Carrefour', stock: 10, date: '2020-12-12'},
    {id: 6, name_product: 'Coca Cola', name_shop: 'Carrefour', stock: 10, date: '2020-12-12'},
    {id: 7, name_product: 'Inka Cola', name_shop: 'Backups', stock: 60, date: '2020-12-13'},
    {id: 8, name_product: 'Coca Cola', name_shop: 'Carrefour', stock: 10, date: '2020-12-12'},
    {id: 9, name_product: 'Coca Cola', name_shop: 'Carrefour', stock: 10, date: '2020-12-12'},
  ];

  constructor() {
    this.dataSource = new MatTableDataSource(this.notificationDTO);
   }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
