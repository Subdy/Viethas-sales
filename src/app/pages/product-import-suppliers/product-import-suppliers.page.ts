import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FirebaseQuery } from '../../database/firebase.database';

@Component({
  selector: 'app-product-import-suppliers',
  templateUrl: './product-import-suppliers.page.html',
  styleUrls: ['./product-import-suppliers.page.scss'],
})
export class ProductImportSuppliersPage implements OnInit {
 list_suppliers: Array<any>; /* = [
  {
    name: 'Addidas',
    address: '161 Ni Sư Huỳnh Liên',
    phone: '+84328021561',
    email: 'info@adidas.com',
    tax_number: '6156151661',
    policy: ''
  } ]; */
  constructor(
    private router: Router,
    private firebaseQuery: FirebaseQuery
    ) {
      //this.getDataSuppliers();
    }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.getDataSuppliers();
  }
  gotoproductaddsupplier() {
    this.router.navigateByUrl('product-import-add-suppliers');
  }
  getDataSuppliers() {
    this.list_suppliers = new Array();
    this.firebaseQuery.getTasks('suppliers').then(data => {
      for (let i in data.docs) {
        this.list_suppliers.push(data.docs[i].data());
      }
    });
  }
  gotoproductimportcart(item) {
    let data: NavigationExtras = {
      state: item
    }
    this.router.navigate(['/product-import-cart'], data);
  }
}
