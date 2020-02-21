import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  status = false;
  listcategy:Array<any>=[
    {name:'thời trang nam'},
    {name:'thời trang  nữ'},
    {name:'váy bé gái'},
]
listcategy1:Array<any>=[
  {name:'thời trang nam '},
  {name:'thời trang nam'},
 
]
  constructor(private router: Router,
    public alertController: AlertController) { }

  ngOnInit() {
  }
  gotocategoryproductlist(){
    this.router.navigateByUrl('category-product-list');
  }
  change() {
    this.status = !this.status;
  }
gotocategorychoose(){
  this.router.navigateByUrl('category-choose');
}
async presentAl() {
  const alert = await this.alertController.create({
    header: 'Tạo Danh mục',
    inputs: [
      {
        name: 'name1',
        type: 'text',
        placeholder: 'Tên danh mục'
      },
      {
      
        name: 'name1',
        type: 'text',
        placeholder: 'Tên danh mục'
      },
      {
        name: 'name1',
        type: 'text',
        placeholder: 'Tên danh mục'
      }
    ] 
   
    // buttons: [
    //   {
    //     text: 'Hủy',
    //     role: 'cancel',
    //     cssClass: 'secondary',
    //     handler: (blah) => {
    //       console.log('Confirm Cancel: blah');
    //     }
    //   }, {
    //     text: 'Tạo',
    //     cssClass: 'white',
    //     handler: () => {
    //       console.log('Confirm Okay');
    //     }
    //   }
    // ]
  });

  await alert.present();
}
}

