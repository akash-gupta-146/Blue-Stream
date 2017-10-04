import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CourseDetailsPage } from '../courseDetails/courseDetails';

@Component({
  selector: 'sidebarSubscribedCourses',
  templateUrl: 'sidebarSubscribedCourses.html'
})
export class sidebarSubscribedCoursesPage {
  constructor(public navCtrl: NavController) {

  }
  openSubscribedCourse(){
    this.navCtrl.push(CourseDetailsPage);
}
}
