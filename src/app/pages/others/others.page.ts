import { Component, OnInit } from "@angular/core";
import { RouterModule, Router } from "@angular/router";

@Component({
  selector: "app-others",
  templateUrl: "./others.page.html",
  styleUrls: ["./others.page.scss"]
})
export class OthersPage implements OnInit {
  public trigger_popupThuChiKhac: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToManagement() {
    this.router.navigateByUrl("management");
  }
  goToSystem() {
    this.router.navigateByUrl("system");
  }
  // Đi đến trang Khoản thu khác
  goToKhoanThuKhac() {
    this.router.navigateByUrl("revenue-add");
  }
  // Đi đến trang Khoản chi khác
  goToKhoanChiKhac() {
    this.router.navigateByUrl("expenditure-add");
  }
  // Bật/tắt popup
  triggerPopup() {
    this.trigger_popupThuChiKhac = !this.trigger_popupThuChiKhac;
  }
  ionViewWillEnter() {
    this.trigger_popupThuChiKhac = false;
  }
}
