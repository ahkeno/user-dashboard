import { Component, OnInit, Input } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-data-graph',
  templateUrl: './data-graph.component.html',
  styleUrls: ['./data-graph.component.scss']
})
export class DataGraphComponent implements OnInit {
  @Input() progressData: any = [];
  grayData : number = 0;
  constructor() { }
   // Doughnut chart
   public chart: any;
  ngOnInit(): void {
    this.grayData = 100 -this.progressData;
    this.createChart();
  }
  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'doughnut', 
      data: {
      datasets: [{
        data: [this.progressData,this.grayData,],
        backgroundColor: [
          '#493DF5'	,
          '#E8E9EB'
        ], 
        borderWidth:0,
        spacing: 0,
        }],
        },options: {
          aspectRatio:1.5
        }
    });
  }
}
