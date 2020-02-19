import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
=======
import { FormsModule } from '@angular/forms';
>>>>>>> origin/master
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

<<<<<<< HEAD
import { SupplierAddPage } from './supplier-add.page';
=======
<<<<<<< HEAD:src/app/pages/notification/notification.module.ts
import { NotificationPage } from './notification.page';
=======
import { SupplierAddPage } from './supplier-add.page';
>>>>>>> origin/master:src/app/pages/supplier-add/supplier-add.module.ts
>>>>>>> origin/master

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    component: SupplierAddPage
=======
<<<<<<< HEAD:src/app/pages/notification/notification.module.ts
    component: NotificationPage
=======
    component: SupplierAddPage
>>>>>>> origin/master:src/app/pages/supplier-add/supplier-add.module.ts
>>>>>>> origin/master
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SupplierAddPage]
})
export class SupplierAddPageModule {}
=======
    RouterModule.forChild(routes)
  ],
<<<<<<< HEAD:src/app/pages/notification/notification.module.ts
  declarations: [NotificationPage]
})
export class NotificationPageModule {}
=======
  declarations: [SupplierAddPage]
})
export class SupplierAddPageModule {}
>>>>>>> origin/master:src/app/pages/supplier-add/supplier-add.module.ts
>>>>>>> origin/master
