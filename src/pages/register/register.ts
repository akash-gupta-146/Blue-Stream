import { Component } from '@angular/core';
import { ViewController, NavController, App, NavParams } from 'ionic-angular';
import { SignedInPage } from '../signedIn/signedin';
import { RegisterWithEmailPage } from '../registerWithEmail/registerWithEmail';

@Component({
  selector: 'register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  myParam: any;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController,public app:App, params: NavParams) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  signUp(registerText){
    this.myParam = registerText;
      this.navCtrl.push(SignedInPage, { 'myParam': this.myParam });
  }

  openRegisterWithEmail(){
    this.navCtrl.push(RegisterWithEmailPage);
  }

}
