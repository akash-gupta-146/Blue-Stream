import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConsentPage } from '../courseDetails/consent/consent';

@Component({
  selector: 'allCourses',
  templateUrl: 'allCourses.html'
})
export class AllCoursesPage {

  constructor(public navCtrl: NavController) {

  }
  openConsentPage(){
    this.navCtrl.push(ConsentPage);
  }
}
