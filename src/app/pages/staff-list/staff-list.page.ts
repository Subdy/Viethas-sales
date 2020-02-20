import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, NavigationExtras } from '@angular/router';
import { AlertController, LoadingController  } from '@ionic/angular';  
import {FirebaseAuth, FirebaseQuery} from '../../database/firebase.database'
@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.page.html',
  styleUrls: ['./staff-list.page.scss'],
})
export class StaffListPage implements OnInit {
  id_employee: 0;
  trigger_popup: boolean;
  mang_a: any;
  id:any;
  list_staff:Array<any>=[];
  staff_sum: number
  constructor(
    public alertCtrl: AlertController,
    private firebaseAuth:FirebaseAuth,
    private firebaseQuery:FirebaseQuery,
    private router: Router,
    public loadingController: LoadingController
  ) { 
    this.trigger_popup=false;
    //this.getrecord ();
  }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.getrecord();
  }

  getrecord(){  
    this.list_staff = new Array();
    
    this.firebaseQuery.getTasks('employees').then(res=>{
      this.staff_sum = res.docs.length;  
      for(let i =0; i< res.docs.length; i++){
        let user = {data: res.docs[i].data(), id: res.docs[i].id }
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', user);
        this.list_staff.push(user);
        
      }
    })
  .catch(err=>{
    console.log("!!!!!!!!!!!!!!!!!!!!!",err);
  })

  }

  gotoDetails(item) {
    let data: NavigationExtras = {
      state: {
        item: item
      }
    };
    this.router.navigate(["/staff-detail"], data);
    /*console.log(item);
    let data = {
      title: item.title,
      description: item.description,
      //image: item.image,
      id: item.id
    };*/
    //this.navCtrl.push(UpdateItemPage, {
    //  data: data
    //});
 
  }


  triggerPopup(){
    this.trigger_popup = !this.trigger_popup;
  }

  cancel(){
    this.trigger_popup = false;
  }


  deteleSupplier(){


    this.trigger_popup = false;
    console.log("xoa thanh cong");
    this.firebaseAuth.deleteEmployee("KRomFgT5NxfGLdT7rV8Y62H3SCs1")
    .then(res => {
      console.log(res);
    }, err => {
      console.log(err);       
    })
  }
 

}  
