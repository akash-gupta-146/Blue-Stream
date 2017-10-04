import { Component } from '@angular/core';
import { NavController, MenuController, NavParams } from 'ionic-angular';
import { CourseListPage } from '../courseList/courseList';
import { CourseDetailsPage } from '../courseDetails/courseDetails';
import { BuyCoursePage } from '../buyCourse/buyCourse';

@Component({
  selector: 'myCourses',
  templateUrl: 'myCourses.html',
  styles: [`

  `]
})
export class MyCoursesPage {
  myParam: any;

  constructor(public navCtrl: NavController, public menu: MenuController,
    params: NavParams) {
    this.menu.enable(true);
  }

openCoursePage(){
    this.navCtrl.push(CourseListPage);
}

openSubscribedCourse(courseName){
  this.myParam = courseName;
    this.navCtrl.push(CourseDetailsPage, { 'myParam': this.myParam });
}

openBuyCoursePage(){
    this.navCtrl.push(BuyCoursePage);
}

}
