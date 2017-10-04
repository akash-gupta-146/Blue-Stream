import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CourseDetailsPage } from '../../../courseDetails';
import { ConsentPage } from '../../consent';
import { LearningOutcomePage } from '../learningOutcomes/learningOutcomes';
import { InformationConsentPage } from '../informationConsent/informationConsent';
import { ButtonInformationPage } from '../buttonInformation/buttonInformation';
import { RefusalFormsPage } from '../refusalForms/refusalForms';
import { ICModelPage } from '../informationConsent/model/model';

@Component({
  selector: 'relatedInformation',
  templateUrl: 'relatedInformation.html'
})
export class RelatedInformationPage {
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
  openButtonInformationPage(){
    this.navCtrl.push(ButtonInformationPage);
  }
  openRefusalFormsPage(){
    this.navCtrl.push(RefusalFormsPage);
  }
  openTestModel(a){
    this.myParam = a;
    let myModal = this.modalCtrl.create(ICModelPage, { 'myParam': this.myParam });
    myModal.present();
  }
}
