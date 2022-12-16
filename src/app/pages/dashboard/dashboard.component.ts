import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/service/loader.service';
import { ProductService } from 'src/app/service/product.service';
import * as moment from 'moment';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products : any [] = [];
  maxEnd: Date = new Date();
  startDate : any;
  endDate : any;
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(private productService: ProductService,
              public loaderService: LoaderService) { }

  ngOnInit(): void {
    /*setTimeout(() => {
      this.productService.getAllProducts().subscribe(data => {
        this.products = data;
      });
    }, 1000);*/
  }

  filter(){

    let date1 = this.startDate;
    let date2 = this.endDate

    date1 = moment(date1).format('YYYY-MM-DDTHH:mm:ss');
    date2 = moment(date2).format('YYYY-MM-DDTHH:mm:ss');
    console.log(date1);
  }

}
