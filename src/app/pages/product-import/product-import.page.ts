import { Component, OnInit } from '@angular/core';
import { Router, RouterModule} from '@angular/router';
import { FirebaseQuery, FirebaseAuth } from '../../database/firebase.database';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-product-import',
  templateUrl: './product-import.page.html',
  styleUrls: ['./product-import.page.scss'],
})
export class ProductImportPage implements OnInit {
  startDay = '2019-12-07';
  endDay = "2019-12-08";
  number = 0;
  show = true;
  bills: Array<any>;
  constructor(
    private router:Router,
    private firebaseQuery: FirebaseQuery,
    private firebaseAuth: FirebaseAuth,
    private storage: Storage
    ) {}

  ionViewWillEnter() {
    this.getBill();
  }
  
  getBill() {
    this.bills = new Array();
    this.firebaseQuery.getTasks_Field("bills", "bill_type", 2, "==").then(res => {
      for (let i in res.docs) {
        this.bills.push(res.docs[i].data());
        this.firebaseQuery.getTask_byID("suppliers", res.docs[i].data().id_supplier)
          .then(res => {
            this.bills[i].supplier_name = res.data().name;
          });
      }
      if(this.bills.length > 0 ) this.show = true;
      console.log(this.bills);
    }).catch(err=> {
      console.log(err);
    })
  }
  
  ngOnInit() {
  }
  exportSoHD() {
    let date = new Date();
    if ((date.getMonth() + 1) < 10) {
      const soHD =
      date
        .getFullYear()
        .toString()
        .slice(2, 4) + '0' +
      (date.getMonth() + 1).toString() +
      date.getUTCDate().toString() +
      date.getHours().toString() +
      date.getMinutes().toString() +
      date.getSeconds().toString();
      return soHD;
    } else {
      const soHD =
      date
        .getFullYear()
        .toString()
        .slice(2, 4) +
      (date.getMonth() + 1).toString() +
      date.getUTCDate().toString() +
      date.getHours().toString() +
      date.getMinutes().toString() +
      date.getSeconds().toString();
      return soHD;
    }
  }
  gotoproductsupplier() {
    let bill_code = this.exportSoHD();
    this.storage.set("soHD",bill_code);
    this.firebaseQuery.createTask('bills',{
      id_staff: this.firebaseAuth.user.id,
      bill_type: 2,
      date: new Date(),
      bill_code: bill_code
    }).then(res => {
      
      let key = 'bill';
      let value = {
        id_staff: this.firebaseAuth.user.id,
        bill_type: 2,
        date: new Date(),
        bill_code: bill_code,
        id: res.id
      };
      this.storage.set(key,value).then(()=> {
        this.storage.get(key).then(res => {
          console.log(res);
        });
      });
     
    }, err => {
      console.log(err);
    }).catch(err => {
      console.log(err);
    });
    this.router.navigateByUrl('product-import-suppliers');
  }
  
}
