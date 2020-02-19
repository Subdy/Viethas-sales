import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

<<<<<<< HEAD
<<<<<<< HEAD:src/app/pages/notification/notification.module.ts
import { NotificationPage } from './notification.page';
=======
import { SupplierAddPage } from './supplier-add.page';
>>>>>>> origin/master:src/app/pages/supplier-add/supplier-add.module.ts
=======
import { NotificationPage } from './notification.page';
>>>>>>> origin/master

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
<<<<<<< HEAD:src/app/pages/notification/notification.module.ts
    component: NotificationPage
=======
    component: SupplierAddPage
>>>>>>> origin/master:src/app/pages/supplier-add/supplier-add.module.ts
=======
    component: NotificationPage
>>>>>>> origin/master
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
<<<<<<< HEAD
<<<<<<< HEAD:src/app/pages/notification/notification.module.ts
  declarations: [NotificationPage]
})
export class NotificationPageModule {}
=======
  declarations: [SupplierAddPage]
})
export class SupplierAddPageModule {}
>>>>>>> origin/master:src/app/pages/supplier-add/supplier-add.module.ts
=======
  declarations: [NotificationPage]
})
export class NotificationPageModule {}
>>>>>>> origin/master
