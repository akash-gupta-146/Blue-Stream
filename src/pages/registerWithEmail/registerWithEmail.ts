import { Component } from '@angular/core';
import { ViewController, NavController, App, NavParams } from 'ionic-angular';
import { SignedInPage } from '../signedIn/signedin';

@Component({
  selector: 'registerWithEmail',
  templateUrl: 'registerWithEmail.html'
})
export class RegisterWithEmailPage {
    myParam: any;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController,public app:App, params: NavParams) {

  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  signUp(registerText){
    this.myParam = registerText;
      this.navCtrl.push(SignedInPage,{ 'myParam': this.myParam });
  }

}
