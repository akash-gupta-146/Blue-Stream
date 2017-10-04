import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CourseDetailsPage } from '../../../courseDetails';
import { ConsentPage } from '../../consent';
import { InformationConsentPage } from '../informationConsent/informationConsent';

@Component({
  selector: 'learningOutcome',
  templateUrl: 'learningOutcome.html'
})
export class LearningOutcomePage {
  constructor(public navCtrl: NavController) {

  }
  openMyCoursesPage(){
    //   this.navCtrl.popTo(MyCoursesPage);
      this.navCtrl.popToRoot();
  }

  goToBack(){
      this.navCtrl.pop();
  }
  openCourseDetailsPage(){
    this.navCtrl.push(CourseDetailsPage);
  }

  openConsentPage(){
    this.navCtrl.push(ConsentPage);
  }

  openInformationConsentPage(){
    this.navCtrl.push(InformationConsentPage);
  }
}
