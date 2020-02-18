import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-import-cart',
  templateUrl: './product-import-cart.page.html',
  styleUrls: ['./product-import-cart.page.scss'],
})
export class ProductImportCartPage implements OnInit {
  list_supplier:Array<any>=[
    {
      id:1,
      name:'Áo Khoát Chống Tia Uv',
      money:'250,000',
      total:'500,000'
    },
    {
      id:2,
      name:'Áo Khoát Chống Tia Uv',
      money:'250,000',
      total:'500,000'
    },
    {
      id:3,
      name:'Áo Khoát Chống Tia Uv',
      money:'250,000',
      total:'500,000'
    },
    {
      id:4,
      name:'Áo Khoát Chống Tia Uv',
      money:'250,000',
      total:'500,000'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
