import { Component } from '@angular/core';
import { NavController, ModalController, ViewController, NavParams } from 'ionic-angular';
import { CourseDetailsPage } from '../../../../courseDetails';
import { ConsentPage } from '../../../consent';
import { LearningOutcomePage } from '../../learningOutcomes/learningOutcomes';
import { ButtonInformationPage } from '../../buttonInformation/buttonInformation';

@Component({
  selector: 'model',
  templateUrl: 'model.html'
})
export class ICModelPage {
    myParam: any;
    text: any;
    constructor(public navCtrl: NavController, public viewCtrl: ViewController,
    params: NavParams) {
        this.myParam = params.get('myParam');
        if(this.myParam == 1){
            this.text = ""
        }
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
  dismiss() {
    this.viewCtrl.dismiss();
  }
 

}
