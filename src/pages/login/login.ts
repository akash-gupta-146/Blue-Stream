import { Component } from '@angular/core';
import { ModalController, ViewController, NavController, NavParams } from 'ionic-angular';
import { ForgetPasswordPage } from './forget-password/forget-password';
import { SignedInPage } from '../signedIn/signedin';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {
  myParam: any;

  constructor(public viewCtrl: ViewController , public  modalCtrl: ModalController, public navCtrl:NavController, params: NavParams  ) {

  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  openForgetPasswordModal() {
    // let myModal = this.modalCtrl.create(ForgetPasswordPage);
    // myModal.present();
    this.navCtrl.push(ForgetPasswordPage);
  }

  signIn(loginText){
    this.myParam = loginText;
    this.navCtrl.push(SignedInPage, { 'myParam': this.myParam });
  }
}
