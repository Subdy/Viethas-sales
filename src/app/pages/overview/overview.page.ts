import { Component, ViewChild } from "@angular/core";
import { Chart } from "chart.js";
import { FirebaseQuery } from "./../../database/firebase.database";

@Component({
  selector: "page-overview",
  templateUrl: "./overview.page.html",
  styleUrls: ["./overview.page.scss"]
})
export class OverViewPage {
  @ViewChild("barChart", { static: false }) barChart;
  bars: any;
  colorArray: any;
  startDateTime: Date = new Date();
  endDateTime: Date = new Date();
  constructor(private FirebaseQuery: FirebaseQuery) {
    this.startDateTime.setHours(0, 0, 0);
    this.endDateTime.setHours(23, 59, 59);
    // this.FirebaseQuery.getTasks_3Field(
    //   "bills",
    //   "date",
    //   this.startDateTime,
    //   ">=",
    //   "date",
    //   this.endDateTime,
    //   "<=",
    //   "bill_type",
    //   2,
    //   "=="
    // ).then(res => {
    //   for (let i in res.docs) {
    //     console.log(res.docs[i].data());
    //   }
    // });
    // this.FirebaseQuery.getTasks("bills").then(res => {
    //   for (let i in res.docs) {
    //     console.log(res.docs[i].data());
    //   }
    //   this.FirebaseQuery.getTasks_Field(
    //     "bill_details",
    //     "id_bill",
    //     res.docs[0].id,
    //     "=="
    //   ).then(res => {
    //     console.log(res.docs[0].data());
    //   });
    // });
    console.log("overview");
  }
  ionViewDidEnter() {
    this.createBarChart();
  }
  createBarChart() {
    var sizeHeight = screen.height;
    var fontSize = sizeHeight / 100 + 4;
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
            backgroundColor: "#00A859",
            borderColor: "#00A859",
            borderWidth: 1
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontSize: fontSize
              },
              gridLines: {
                display: true
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
            left: 5,
            right: 5,
            bottom: 0,
            top: 0
          }
        }
      }
    });
  }
  
}
