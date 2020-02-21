import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExpenditureAddPage } from './expenditure-add.page';

const routes: Routes = [
  {
    path: '',
    component: ExpenditureAddPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExpenditureAddPage]
})
export class ExpenditureAddPageModule {}
