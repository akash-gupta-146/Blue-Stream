import { Component } from '@angular/core';
import { NavController , ModalController } from 'ionic-angular';
import { CourseDetailsPage } from '../../../courseDetails';
import { ConsentPage } from '../../consent';
import { LearningOutcomePage } from '../learningOutcomes/learningOutcomes';
import { ButtonInformationPage } from '../buttonInformation/buttonInformation';
import { ICModelPage } from './model/model';

@Component({
  selector: 'informationConsent',
  templateUrl: 'informationConsent.html'
})
export class InformationConsentPage {

  myParam = '';
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

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
  openLearningOutcome(){
    this.navCtrl.push(LearningOutcomePage);
  }
  openButtonInformationPage(){
    this.navCtrl.push(ButtonInformationPage);
  }
  openTestModel(a){
    this.myParam = a;
    let myModal = this.modalCtrl.create(ICModelPage, { 'myParam': this.myParam });
    myModal.present();
  }
}
