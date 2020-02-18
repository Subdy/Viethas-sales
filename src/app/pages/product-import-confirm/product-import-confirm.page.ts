import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-import-confirm',
  templateUrl: './product-import-confirm.page.html',
  styleUrls: ['./product-import-confirm.page.scss'],
})
export class ProductImportConfirmPage implements OnInit {
  startDay = '2019-12-07';
  endDay = "2019-12-08";
  list_name:Array<any>=[
    {
      name:'Áo Khoát Chống nắng',
      money:'230,000',
      amount:2,
      total:'500,000'
    },
    {
      name:'Áo Khoát Chống nắng',
      money:'230,000',
      amount:2,
      total:'500,000'
    },
    {
      name:'Áo Khoát Chống nắng',
      money:'230,000',
      amount:2,
      total:'500,000'
    },
    {
      name:'Áo Khoát Chống nắng',
      money:'230,000',
      amount:2,
      total:'500,000'
    },
    {
      name:'Áo Khoát Chống nắng',
      money:'230,000',
      amount:2,
      total:'500,000'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
