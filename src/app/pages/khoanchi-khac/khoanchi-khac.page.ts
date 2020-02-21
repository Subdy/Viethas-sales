import { Component, OnInit } from '@angular/core';
import { FirebaseAuth, FirebaseQuery } from "./../../database/firebase.database";
import { Router } from "@angular/router";
import { BillTools } from "../billtools.class";
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
  ValidationErrors
} from "@angular/forms";

@Component({
  selector: 'app-khoanchi-khac',
  templateUrl: './khoanchi-khac.page.html',
  styleUrls: ['./khoanchi-khac.page.scss'],
})
export class KhoanchiKhacPage implements OnInit {
  private user_info;
  validations_form: FormGroup;
  errorMessage: string = "";
  private triggerPopupValidation : boolean = false;
  private triggerPopupValidation_message : string = "Bạn phải nhập đúng các trường cần thiết";
  validation_messages = {
    date: [
      { type: "required", message: "Date is required." }
    ],
    staffName: [
      { type: "required", message: "Staff name is required." }
    ],
    total: [
      { type: "required", message: "Money is required." },
      { type: "pattern", message: "Money should be only number." }
    ],
    content: [
      { type: "required", message: "Content is required." }
    ]
  };
  private collection = "bills";

  constructor(
    private firebaseAuth: FirebaseAuth,
    private formBuilder: FormBuilder,
    private firebaseQuery : FirebaseQuery,
    private billTools : BillTools
  ) {
    this.tryCheckSignedIn();
  }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      date: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      staffName: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      total: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$")
        ])
      ),
      content: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      )
    });
    this.deleteAllTasks();
  }

  tryCheckSignedIn() {
    this.firebaseAuth.checkSignedIn().then(resp => {
      if (resp) {
        this.user_info = this.firebaseAuth.user;
        console.log(this.user_info);
      }
    });
  }
  
  onSubmit(form) {
    // Check validation of all inputs
    if(!form.valid) {
      this.triggerPopupValidation = true;
      return;
    }
    console.log(form.value);

    // Insert new bill to database
    let data = form.value;
    data["bill_code"] = this.billTools.genNewBillCode(); // Add bill_code
    data["date"] = new Date(data["date"]);
    data["id_staff"] = this.user_info.id; // Add id_staff
    data["bill_type"] = 8; // Add bill type
    delete data["staffName"]; // Delete staff name

    this.firebaseQuery.createTask(this.collection, data)
    .then(res=>{
      this.triggerPopupValidation_message = "Cập nhật hóa đơn thành công.";
      this.triggerPopupValidation = true;
      form.reset();
      this.tryGetTasks();
    },
    err=>{
      this.triggerPopupValidation_message = "Có lỗi xảy ra khi cập nhật hóa đơn.";
      this.triggerPopupValidation = true;
    })
    .catch(error=>{
      this.triggerPopupValidation_message = "Có lỗi xảy ra khi cập nhật hóa đơn.";
      this.triggerPopupValidation = true;
    });

  }

  tryGetTasks() {
    let mang_a: any;
    mang_a = new Array();
    this.firebaseQuery.getTasks(this.collection)
    .then( res => {
      for(let i=0; i<res.docs.length; i++) {
          mang_a.push(res.docs[i].data());
          mang_a[mang_a.length - 1].id = res.docs[i].id;
      }
      console.log(mang_a);
      return mang_a;
    }, err => {
      console.log(err);
    })
    .catch(err=>{
      console.log(err);
    });
  }

  deleteAllTasks() {
    let mang_a: any;
    mang_a = new Array();
    this.firebaseQuery.getTasks(this.collection)
    .then( res => {
      for(let i=0; i<res.docs.length; i++) {
          this.firebaseQuery.deleteTask(this.collection, res.docs[i].id)
            .then(res=>{},
            err=>{})
            .catch(error=>{})
      }
    }, err => {
      console.log(err);
    })
    .catch(err=>{
      console.log(err);
    });
  }
}
