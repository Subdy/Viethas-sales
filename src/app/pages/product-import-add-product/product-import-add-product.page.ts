import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { Router, RouterModule, NavigationExtras} from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-product-import-add-product',
  templateUrl: './product-import-add-product.page.html',
  styleUrls: ['./product-import-add-product.page.scss'],
})
export class ProductImportAddProductPage implements OnInit {
  product: FormGroup;
  supplier: Object;
  constructor(
    private router: Router
    ) {
      //nha cung cap 
      this.supplier = this.router.getCurrentNavigation().extras.state;
      console.log(this.supplier);
      //khoi tao form
      this.product = new FormGroup({
        name: new FormControl('', Validators.required),
        id_category: new FormControl('', Validators.required),
        size: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        img: new FormControl('', Validators.required),
        id_discount: new FormControl('', Validators.required),
        SKU: new FormControl('', Validators.required),
        unit: new FormControl('', Validators.required),
        color: new FormControl('', Validators.required),
        barcode: new FormControl('', Validators.required),
        price_import: new FormControl('', Validators.required),
      });
    }

  ngOnInit() {
  }

  save() {
  }
  
}
