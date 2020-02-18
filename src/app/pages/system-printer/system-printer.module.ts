import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SystemPrinterPage } from './system-printer.page';

const routes: Routes = [
  {
    path: '',
    component: SystemPrinterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SystemPrinterPage]
})
export class SystemPrinterPageModule {}
