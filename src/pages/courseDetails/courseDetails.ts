import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IntroductionPage } from './introduction/introduction';
import { ConsentPage } from './consent/consent';
import { LearningOutcomePage } from './consent/questions/learningOutcomes/learningOutcomes';
import { InformationConsentPage } from './consent/questions/informationConsent/informationConsent';
import { ButtonInformationPage } from './consent/questions/buttonInformation/buttonInformation';
import { RelatedInformationPage } from './consent/questions/relatedInformation/relatedInformation';

@Component({
  selector: 'courseDetails',
  templateUrl: 'courseDetails.html',
  styles: [`
    progress{
        width:85%;
        margin-bottom: -5px;
    }
    ion-list{
        white-space: initial;
    }
  `]
})
export class CourseDetailsPage {
  myParam: any;

  constructor(public navCtrl: NavController, params: NavParams) {
    this.myParam = params.get('myParam');
  }

  openIntroductionPage(){
      this.navCtrl.push(IntroductionPage);
  }

  openConsentPage(){
    this.navCtrl.push(ConsentPage);
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
}
