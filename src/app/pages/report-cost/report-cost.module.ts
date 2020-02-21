import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportCostPage } from './report-cost.page';
import { BillTools } from './../billtools.class';
const routes: Routes = [
  {
    path: '',
    component: ReportCostPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportCostPage],
  providers: [BillTools]
})
export class ReportCostPageModule {}
