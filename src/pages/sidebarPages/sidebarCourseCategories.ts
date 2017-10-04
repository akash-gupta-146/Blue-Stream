import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CourseDetailsPage } from '../courseDetails/courseDetails';
import { AllCoursesPage } from '../allCourses/allCourses';

@Component({
  selector: 'sidebarSubscribedCourses',
  templateUrl: 'sidebarCourseCategories.html',
  styles: [`
  .big{
        font-size:60px;
    }
`]
})
export class SidebarCourseCategoriesPage {
  constructor(public navCtrl: NavController) {

  }
  openAllCoursesPage(){
    this.navCtrl.push(AllCoursesPage);
}
}
