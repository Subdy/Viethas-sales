import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.page.html',
  styleUrls: ['./supplier-list.page.scss'],
})
export class SupplierListPage implements OnInit {
  list_suppliers1:Array<any>=[
    {
    name:'adidas',
    phone:'23456543346',
    email:'nguyenvan@gmail.com'
  },
  {
    name:'adidas',
    phone:'23456543346',
    email:'nguyenvan@gmail.com'
  },
  {
    name:'adidas',
    phone:'23456543346',
    email:'nguyenvan@gmail.com'
  },
  {
    name:'adidas',
    phone:'23456543346',
    email:'nguyenvan@gmail.com'
  },
]
  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotosupplieradd(){
    this.router.navigateByUrl('supplier-add');
  }
  gotosupplierdetail(){
    this.router.navigateByUrl('supplier-detail');
  }
}
