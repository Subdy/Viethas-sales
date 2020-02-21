import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KhoanthuKhacPage } from './khoanthu-khac.page';
import { BillTools } from "../billtools.class";

const routes: Routes = [
  {
    path: '',
    component: KhoanthuKhacPage
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
  declarations: [KhoanthuKhacPage],
  providers: [
    NgForm,
    BillTools
  ]
})
export class KhoanthuKhacPageModule {}
