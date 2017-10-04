import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CourseDetailsPage } from '../../../courseDetails';
import { ConsentPage } from '../../consent';
import { LearningOutcomePage } from '../learningOutcomes/learningOutcomes';
import { InformationConsentPage } from '../informationConsent/informationConsent';
import { ButtonInformationPage } from '../buttonInformation/buttonInformation';
import { RelatedInformationPage } from '../relatedInformation/relatedInformation';
import { Test1Page } from '../test1/test1';
import { ICModelPage } from '../informationConsent/model/model';

@Component({
  selector: 'refusalForms',
  templateUrl: 'refusalForms.html'
})
export class RefusalFormsPage {
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
  openRelatedInformationPage(){
    this.navCtrl.push(RelatedInformationPage);
  }
  openTest1Page(){
      this.navCtrl.push(Test1Page);
  }
  openTestModel(a){
    this.myParam = a;
    let myModal = this.modalCtrl.create(ICModelPage, { 'myParam': this.myParam });
    myModal.present();
  }
}
