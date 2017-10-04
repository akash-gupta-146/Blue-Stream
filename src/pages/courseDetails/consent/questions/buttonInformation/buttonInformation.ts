import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CourseDetailsPage } from '../../../courseDetails';
import { ConsentPage } from '../../consent';
import { LearningOutcomePage } from '../learningOutcomes/learningOutcomes';
import { InformationConsentPage } from '../informationConsent/informationConsent';
import { RelatedInformationPage } from '../relatedInformation/relatedInformation';
import { ICModelPage } from '../informationConsent/model/model';

@Component({
  selector: 'buttonInformation',
  templateUrl: 'buttonInformation.html'
})
export class ButtonInformationPage {
  myParam: any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

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
  openInformationConsentPage(){
    this.navCtrl.push(InformationConsentPage);
  }
  openRelatedInformationPage(){
    this.navCtrl.push(RelatedInformationPage);
  }
  openTestModel(a){
    this.myParam = a;
    let myModal = this.modalCtrl.create(ICModelPage, { 'myParam': this.myParam });
    myModal.present();
  }
}
