import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  constructor(public navCtrl: NavController) {}
  openWelcomePage(){
      this.navCtrl.push(WelcomePage);
  }
}
