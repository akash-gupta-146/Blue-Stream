import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CourseDetailsPage } from '../courseDetails/courseDetails';
import { BuyCoursePage } from '../buyCourse/buyCourse';

@Component({
  selector: 'sidebarNewCourses',
  templateUrl: 'sidebarNewCourses.html'
})
export class SidebarNewCoursesPage {
  constructor(public navCtrl: NavController) {

  }

  openBuyCoursePage(){
    this.navCtrl.push(BuyCoursePage);
}

}
