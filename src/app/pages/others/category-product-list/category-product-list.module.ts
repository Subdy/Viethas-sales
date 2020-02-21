import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Routes, RouterModule } from "@angular/router";
import { FormsModule, NgForm, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { CategoryProductListPage } from "./category-product-list.page";

const routes: Routes = [
  {
    path: "",
    component: CategoryProductListPage
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
  declarations: [CategoryProductListPage]
})
export class CategoryProductListPageModule {}
