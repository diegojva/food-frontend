import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  type: string = 'line';
  chart: any;


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.draw();
  }

  draw(){
    this.productService.getAllProductsLow().subscribe(data => {
      console.log(data);
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
