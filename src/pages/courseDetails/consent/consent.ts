import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyCoursesPage } from '../../myCourses/myCourses';
import { LearningOutcomePage } from './questions/learningOutcomes/learningOutcomes';
import { CourseDetailsPage } from '../courseDetails';
import { InformationConsentPage } from './questions/informationConsent/informationConsent';
import { ButtonInformationPage } from './questions/buttonInformation/buttonInformation';
import { RelatedInformationPage } from './questions/relatedInformation/relatedInformation';
import { RefusalFormsPage } from './questions/refusalForms/refusalForms';
import { Test1Page } from './questions/test1/test1';
import { Test2Page } from './questions/test2/test2';

@Component({
  selector: 'consent',
  templateUrl: 'consent.html'
})
export class ConsentPage {

  constructor(public navCtrl: NavController) {

  }
  openMyCoursesPage(){
    //   this.navCtrl.popTo(MyCoursesPage);
      this.navCtrl.popToRoot();
  }

  goToBack(){
      this.navCtrl.pop();
  }
  openLearningOutcomePage(){
    this.navCtrl.push(LearningOutcomePage)
  }
  openCourseDetailsPage(){
    this.navCtrl.push(CourseDetailsPage);
  }
  openInformationConsentPage(){
    this.navCtrl.push(InformationConsentPage);
  }
  openButtonInformationPage(){
    this.navCtrl.push(ButtonInformationPage);
  }
  openRelatedInformationPage(){
    this.navCtrl.push(RelatedInformationPage)
  }
  openRefusalFormsPage(){
    this.navCtrl.push(RefusalFormsPage);
  }
  openTest1Page(){
    this.navCtrl.push(Test1Page);
  }
  openTest2Page(){
    this.navCtrl.push(Test2Page);
  }
}
