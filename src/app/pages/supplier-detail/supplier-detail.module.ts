import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { FormsModule } from '@angular/forms';
>>>>>>> origin/master
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SupplierDetailPage } from './supplier-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SupplierDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
    ReactiveFormsModule,
=======
>>>>>>> origin/master
    RouterModule.forChild(routes)
  ],
  declarations: [SupplierDetailPage]
})
export class SupplierDetailPageModule {}
