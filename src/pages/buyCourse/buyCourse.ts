import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IntroductionPage } from '../courseDetails/introduction/introduction';
import { ConsentPage } from '../courseDetails/consent/consent';

@Component({
  selector: 'buyCourse',
  templateUrl: 'buyCourse.html',
  styles: [`
  ion-list{
      white-space: initial;
  }
`]
})
export class BuyCoursePage {
  constructor(public navCtrl: NavController) {

  }
  openIntroductionPage(){
    this.navCtrl.push(IntroductionPage);
}
openConsentPage(){
  this.navCtrl.push(ConsentPage);
}
}
