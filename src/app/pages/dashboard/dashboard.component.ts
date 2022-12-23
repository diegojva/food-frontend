import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/service/loader.service';
import { ProductService } from 'src/app/service/product.service';
import * as moment from 'moment';
import { Chart } from 'chart.js';

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
  type: string = 'line';
  chart: any;

  constructor(private productService: ProductService, public loaderService: LoaderService) { }

  ngOnInit(): void {
    this.draw();
  }

  draw(){
    this.productService.getAllProductsLow().subscribe(data => {
      let dates = data.map(x => x.productName);
      let quantities = data.map(x => x.stock);

      this.chart = new Chart('canvas', {
        type: this.type,
        data: {
          labels: dates,
          datasets: [
            {
              label: 'Quantity',
              data: quantities,
              borderColor: "#3cba9f",
              fill: false,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 0, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ]
            }
          ]
        },
        options: {
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              }
            }],
          }
        }
      });
    });
  }

  change(type: string){
    this.type = type;
    if(this.chart != null){
      this.chart.destroy();
    }
    this.draw();
  }



}
