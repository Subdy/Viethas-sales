import { Component, OnInit } from '@angular/core';
import { Router, RouterModule} from '@angular/router';
import {
  Validators,
  FormBuilder,
  FormControl,
  FormGroup
} from "@angular/forms";
import { FirebaseQuery } from '../../database/firebase.database';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.page.html',
  styleUrls: ['./supplier-add.page.scss'],
})
export class SupplierAddPage implements OnInit {
  addSupplier: FormGroup;
  constructor( private router: Router,
    private formBuilder: FormBuilder,
    private firebaseQuery: FirebaseQuery,
    private navCtrl: NavController) {
     }

  ngOnInit() {
    this.addSupplier = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      tax_number: ['', Validators.required],
      policy: ['', Validators.required]
    });
  }
  createSupplier() {
    this.firebaseQuery.createTask('suppliers', this.addSupplier.value)
    .then(res => {
      console.log("thanh cong");
      this.navCtrl.pop();
    }, err => {
      console.log('Error: ', err);
    }).catch(err => {
      console.log(err);
    });
  }

}
