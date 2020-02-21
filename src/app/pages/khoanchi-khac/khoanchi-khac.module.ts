import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KhoanchiKhacPage } from './khoanchi-khac.page';
import { BillTools } from "../billtools.class";

const routes: Routes = [
  {
    path: '',
    component: KhoanchiKhacPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [KhoanchiKhacPage],
  providers: [
    NgForm,
    BillTools
  ]
})
export class KhoanchiKhacPageModule {}
