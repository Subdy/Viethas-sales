import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, NgForm, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { RevenueAddPage } from "./revenue-add.page";

const routes: Routes = [
  {
    path: "",
    component: RevenueAddPage
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
  declarations: [RevenueAddPage]
})
export class RevenueAddPageModule {}
