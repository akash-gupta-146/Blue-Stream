import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CourseDetailsPage } from '../../../courseDetails';
import { ConsentPage } from '../../consent';
import { LearningOutcomePage } from '../learningOutcomes/learningOutcomes';
import { InformationConsentPage } from '../informationConsent/informationConsent';
import { ButtonInformationPage } from '../buttonInformation/buttonInformation';
import { Test1Page } from '../test1/test1';

@Component({
  selector: 'test2',
  templateUrl: 'test2.html'
})
export class Test2Page {
  constructor(public navCtrl: NavController) {

  }
  openMyCoursesPage(){
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
  openButtonInformationPage(){
    this.navCtrl.push(ButtonInformationPage);
  }
  openTest1Page(){
    this.navCtrl.push(Test1Page);
  }
}
