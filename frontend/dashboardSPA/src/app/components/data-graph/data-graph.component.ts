import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-data-graph',
  templateUrl: './data-graph.component.html',
  styleUrls: ['./data-graph.component.scss']
})
export class DataGraphComponent implements OnInit {

  constructor() { }
   // Doughnut
   public chart: any;
  ngOnInit(): void {
    this.createChart();
  }
  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'doughnut', 
      data: {
      datasets: [{
        data: [34,66], // 100 is default and 34 should come from data
        backgroundColor: [
          '#493DF5'	,
          '#E8E9EB'
        ], borderWidth:0,
        spacing: 0,
        }],
        },options: {
          aspectRatio:0 
        }
    });
  }
}
