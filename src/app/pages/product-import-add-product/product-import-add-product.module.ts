import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductImportAddProductPage } from './product-import-add-product.page';

const routes: Routes = [
  {
    path: '',
    component: ProductImportAddProductPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductImportAddProductPage]
})
export class ProductImportAddProductPageModule {}
