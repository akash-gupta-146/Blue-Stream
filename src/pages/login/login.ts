import { Component } from '@angular/core';
import { ModalController, ViewController } from 'ionic-angular';
import { ForgetPasswordPage } from './forget-password/forget-password';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public viewCtrl: ViewController , public  modalCtrl: ModalController  ) {

  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  openForgetPasswordModal() {
    let myModal = this.modalCtrl.create(ForgetPasswordPage);
    myModal.present();
  }
}
