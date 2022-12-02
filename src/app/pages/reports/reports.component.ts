import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  type: string = 'line';
  chart: any;

  constructor() { }

  ngOnInit(): void {
  }

  

  change(type: string){
    this.type = type;
    if(this.chart != null){
      this.chart.destroy();
    }
   // this.draw();
  }



}
