import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {PopoverController} from '@ionic/angular';
@Component({
  selector: 'app-product-import-add-product',
  templateUrl: './product-import-add-product.page.html',
  styleUrls: ['./product-import-add-product.page.scss'],
})
export class ProductImportAddProductPage implements OnInit {
  product: FormGroup;
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

}
