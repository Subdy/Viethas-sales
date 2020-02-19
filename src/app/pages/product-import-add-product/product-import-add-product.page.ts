import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {PopoverController} from '@ionic/angular';
@Component({
  selector: 'app-product-import-add-product',
  templateUrl: './product-import-add-product.page.html',
  styleUrls: ['./product-import-add-product.page.scss'],
})
export class ProductImportAddProductPage implements OnInit {
  product: FormGroup;
  constructor(
    public formBuilder: FormBuilder
    ) { 
      this.product = this.formBuilder.group({
        name: ['', Validators.required],
        id_category: ['', Validators.required],
        size: ['', Validators.required],
        price: ['', Validators.required],
        img: ['', Validators.required],
        id_discount: ['', Validators.required],
        SKU: ['', Validators.required],
        unit: ['', Validators.required],
        color: ['', Validators.required],
        barcode: ['', Validators.required],
        priceSell: ['', Validators.required]
      });
    }

  ngOnInit() {
  }
  
}
