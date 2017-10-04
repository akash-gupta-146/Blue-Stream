import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CourseDetailsPage } from '../../../courseDetails';
import { ConsentPage } from '../../consent';
import { LearningOutcomePage } from '../learningOutcomes/learningOutcomes';
import { InformationConsentPage } from '../informationConsent/informationConsent';
import { ButtonInformationPage } from '../buttonInformation/buttonInformation';
import { RefusalFormsPage } from '../refusalForms/refusalForms';
import { Test2Page } from '../test2/test2';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'test1',
  templateUrl: 'test1.html'
})
export class Test1Page {
  wrong: any;
  right: string;
  response: any;
  constructor(public navCtrl: NavController) {
  }

  answer(){
    console.log(this.response);
    // if(this.response)
    //   this.right = 'a';
    // else
    //   this.right = 'b';

    //   console.log(this.right);


      this.right = this.response;


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
  openRefusalFormsPage(){
    this.navCtrl.push(RefusalFormsPage);
  }
  openTest2Page(){
    this.navCtrl.push(Test2Page);
  }
}
