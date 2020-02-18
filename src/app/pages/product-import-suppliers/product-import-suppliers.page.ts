import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-import-suppliers',
  templateUrl: './product-import-suppliers.page.html',
  styleUrls: ['./product-import-suppliers.page.scss'],
})
export class ProductImportSuppliersPage implements OnInit {
 list_item:Array<any>=[
   {
     id:1,
     name:'Addidas',
     gmail:'ngyng@gmail.com',
     smatphone:123456734556
   },
   {
    id:2,
    name:'Addidas',
    gmail:'ngyng@gmail.com',
    smatphone:123456734556
  },
  {
    id:3,
    name:'Addidas',
    gmail:'ngyng@gmail.com',
    smatphone:123456734556
  },
  {
    id:4,
    name:'Addidas',
    gmail:'ngyng@gmail.com',
    smatphone:123456734556
  },
  {
    id:5,
    name:'Addidas',
    gmail:'ngyng@gmail.com',
    smatphone:123456734556
  },
  {
    id:6,
    name:'Addidas',
    gmail:'ngyng@gmail.com',
    smatphone:123456734556
  },
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }
  gotoproductaddsupplier() {
    this.router.navigateByUrl('product-import-add-suppliers');
  }
}
