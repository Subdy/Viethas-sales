import { Component, OnInit } from '@angular/core';

import { Router, RouterModule, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-product-import-cart',
  templateUrl: './product-import-cart.page.html',
  styleUrls: ['./product-import-cart.page.scss'],
})
export class ProductImportCartPage implements OnInit {
  list_product: Array<any>; /* =[
    {
      id:1,
      name:'Áo Khoát Chống Tia Uv',
      money:'250,000',
      total:'500,000'
    }
  ] */
  supplier: Object;
  constructor( private router: Router) {
    this.supplier = this.router.getCurrentNavigation().extras.state;
    console.log(this.supplier);
  }

  ngOnInit() {
  }
  gotoCreateProduct() {
    let data: NavigationExtras = {
      state: this.supplier
    }
    this.router.navigate(['/product-import-add-product'], data);
  }



}
