import { Component, OnInit } from '@angular/core';
import { FirebaseQuery } from "./../../database/firebase.database";

@Component({
  selector: 'app-report-cost',
  templateUrl: './report-cost.page.html',
  styleUrls: ['./report-cost.page.scss'],
})
export class ReportCostPage implements OnInit {

  public data: Array<any>;
  public time_end : Date = new Date();
  public time_start : Date = new Date(); 
  public collection = "bills";
  constructor(private firebaseQuery: FirebaseQuery,) {

  }

  ngOnInit() {
    this.time_start.setDate(this.time_end.getDate() - 30); // -30 day from time_end
    this.getBillsBetween2Times(this.time_start, this.time_end);
    // this.tryGetTasks();
  }
  getBillsBetween2Times(startTime : Date, endTime : Date, billType : number = null) {
    if(billType == null) {
      this.firebaseQuery.getTasks_2Field(this.collection, "date", startTime, ">=", "date", endTime, "<=")
        .then(res=>{
          this.data = [];
          for(let i =0; i< res.docs.length; i++){
            this.data.push(res.docs[i].data());
            this.data[this.data.length - 1].date = new Date(this.data[this.data.length - 1].date.toDate());
            this.data[this.data.length - 1].name_staff = this.getStaffName(this.data[this.data.length - 1].id_staff);
            this.data[this.data.length - 1].id = res.docs[i].id;
          }
          console.log(this.data);
        },
        err=>{
          this.data = [];
        })
        .catch(error=>{
          this.data = [];
        });
    }
    else {
      this.firebaseQuery.getTasks_3Field(this.collection, "date", startTime, ">=", "date", endTime, "<=", "bill_type", billType, "==")
        .then(res=>{
          this.data = [];
          for(let i =0; i< res.docs.length; i++){
            this.data.push(res.docs[i].data());
            this.data[this.data.length - 1].id = res.docs[i].id;
          }
          console.log(this.data);
        },
        err=>{
          this.data = [];
        })
        .catch(error=>{
          this.data = [];
        });
    }
  }
  getStaffName(staffId : string) : string {
    this.firebaseQuery.getTask_byID("staffs", staffId)
      .then(res=>{
        return res.name;
      },
      err=>{
        return "Không tồn tại";
      })
      .catch(error=>{
        return "Không lấy được tên nhân viên";
      });
      return "Không lấy được tên nhân viên";
  }
  // tryGetTasks() {
  //   let mang_a: any;
  //   mang_a = new Array();
  //   this.firebaseQuery.getTasks("staffs")
  //   .then( res => {
  //     for(let i=0; i<res.docs.length; i++) {
  //         mang_a.push(res.docs[i].data());
  //         mang_a[mang_a.length - 1].id = res.docs[i].id;
  //     }
  //     console.log(mang_a);
  //   }, err => {
  //     console.log(err);
  //   })
  //   .catch(err=>{
  //     console.log(err);
  //   });
  // }
}
