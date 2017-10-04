import { Component } from '@angular/core';
import { NavController, MenuController, App, NavParams } from 'ionic-angular';
import { MyCoursesPage } from '../myCourses/myCourses';


@Component({
  selector: 'signedin',
  templateUrl: 'signedin.html',
  styles:[`ion-icon{
    font-size:100px;
}
ion-card{
    background: #2196F3;   
}`]
})
export class SignedInPage {
  myParam: any;

  constructor(public nav: NavController, public menu: MenuController, public app: App, params: NavParams) {
    this.myParam = params.get('myParam');
  }

  continueAsStudent(){
    this.nav.setRoot(MyCoursesPage);
    this.nav.popToRoot();    
  }
}
