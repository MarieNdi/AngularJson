import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit {
  chart: any;

  constructor() { }

  ngOnInit(): void {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    this.chart = new Chart('myChart', {
      type: 'bar', 
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Sales',
          data: [12, 19, 3, 5, 2, 3, 7],
          backgroundColor: '#42A5F5'
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
