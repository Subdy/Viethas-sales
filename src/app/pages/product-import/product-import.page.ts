import { Component, OnInit } from '@angular/core';
import { Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-product-import',
  templateUrl: './product-import.page.html',
  styleUrls: ['./product-import.page.scss'],
})
export class ProductImportPage implements OnInit {
  startDay = '2019-12-07';
  endDay = "2019-12-08";
  private number = 0;
  private bills = [
    {
      id_bill: "HD01",
      cost: "2934793274",
      customer: "VIP",
      status: "Đã bán",
      date: new Date()
    },{
      id_bill: "HD01",
      cost: "2934793274",
      customer: "VIP",
      status: "Đã bán",
      date: new Date()
    },{
      id_bill: "HD01",
      cost: "2934793274",
      customer: "VIP",
      status: "Đã bán",
      date: new Date()
    },{
      id_bill: "HD01",
      cost: "2934793274",
      customer: "VIP",
      status: "Đã bán",
      date: new Date()
    },{
      id_bill: "HD01",
      cost: "2934793274",
      customer: "VIP",
      status: "Đã bán",
      date: new Date()
    },
    {
      id_bill: "HD01",
      cost: "2934793274",
      customer: "VIP",
      status: "Đã bán",
      date: new Date()
    },
    {
      id_bill: "HD01",
      cost: "2934793274",
      customer: "VIP",
      status: "Đã bán",
      date: new Date()
    },
    {
      id_bill: "HD01",
      cost: "2934793274",
      customer: "VIP",
      status: "Đã bán",
      date: new Date()
    },
    {
      id_bill: "HD01",
      cost: "2934793274",
      customer: "VIP",
      status: "Đã bán",
      date: new Date()
    },
    {
      id_bill: "HD01",
      cost: "2934793274",
      customer: "VIP",
      status: "Đã bán",
      date: new Date()
    },
    {
      id_bill: "HD01",
      cost: "2934793274",
      customer: "VIP",
      status: "Đã bán",
      date: new Date()
    },
    {
      id_bill: "HD01",
      cost: "2934793274",
      customer: "VIP",
      status: "Đã bán",
      date: new Date()
    }
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }
  gotoproductsupplier() {
    this.router.navigateByUrl('product-import-suppliers');
  }
  
}
