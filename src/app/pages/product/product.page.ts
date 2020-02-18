import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";

import { from } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  constructor(   private router: Router) { }

  ngOnInit() {
  }
  gotoproductlist(){
    this.router.navigate(['/product-list']);
    
  }
  gotoproductimport(){
    this.router.navigate(['/product-import']);
  }
}
