import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public viewCtrl: ViewController) {

  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
