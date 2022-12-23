import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationDTO } from 'src/app/model/notificationDTO';
import {TooltipPosition} from '@angular/material/tooltip';
import { NotificationService } from 'src/app/service/notification.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { LoaderService } from 'src/app/service/loader.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  displayedColumns: string[] = ['id','sendDate','setTo','subject','text','actions'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  totalElements: number;
  

  constructor(private notificationService: NotificationService, public loaderService: LoaderService) {
    //this.dataSource = new MatTableDataSource(this.notificationDTO);
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

  createTable(notification: any){
    this.dataSource = new MatTableDataSource(notification.content);    
    this.totalElements = notification.totalElements;
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;        
  }

  loadData(){
    this.notificationService.listPageable(0, 3).subscribe(data => {
      this.createTable(data);
    });
  }

}
