import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'forget-password',
  templateUrl: 'forget-password.html'
})
export class ForgetPasswordPage {

  constructor(public viewCtrl: ViewController ) {

  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
