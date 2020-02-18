import { Component, ViewChild } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "page-overview",
  templateUrl: "./overview.page.html",
  styleUrls: ["./overview.page.scss"]
})
export class OverViewPage {
  @ViewChild("barChart", { static: false }) barChart;
  bars: any;
  colorArray: any;

  constructor() {
    console.log("overview");
  }
  ionViewDidEnter() {
    this.createBarChart();
  }
  createBarChart() {
    var sizeHeight = screen.height;
    var fontSize = sizeHeight / 100 + 3;
    console.log(fontSize);
    Chart.defaults.global.defaultFontSize = fontSize;
    Chart.defaults.global.tooltips.enabled = false;
    this.bars = new Chart(this.barChart.nativeElement, {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
          {
            label: "total",
            barPercentage: 0.3,
            data: [5, 3, 5, 6, 6, 5, 7, 6],
            backgroundColor: "#009933",
            borderColor: "#009933",
            borderWidth: 1
          }
        ]
      },
      options: {
        legend: {
          display:false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontSize: fontSize
              },
              gridLines: {
                display: true,
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                fontSize: fontSize
              },
              gridLines: {
                display: false
              }
            }
          ]
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            bottom: 0,
            top: 20
          }
        }
      }
    });
  }
}
