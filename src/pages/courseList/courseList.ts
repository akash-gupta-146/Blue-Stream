import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'courseList',
  templateUrl: 'courseList.html'
})
export class CourseListPage {
  courselist: { name: string; img: string; price: string; timeLeft: string; }[];
  category: any;

  constructor(public navCtrl: NavController, params: NavParams) {
    this.category = params.get('category');

    this.courselist = [
      {name:'Anaphylaxis', img:'http://americasbestcareplus.com/wp-content/uploads/2017/03/Screen-Shot-2017-03-25-at-11.25.35-AM.png',price:'$200.00', timeLeft:'3'},
      {name:'Counter Fraud', img:'http://www.localgov.co.uk/Library/images/teaser/fraud1.gif',price:'$150.00', timeLeft:'4'},
      {name:'Cytology', img:'http://www.healthline.com/hlcmsresource/images/imce/cytology-exam-of-urine_thumb.jpg',price:'$230.00', timeLeft:'5'},
      {name:'Carer Awareness', img:'http://www.actionforcarers.org.uk/files/1213/6318/0972/Young_woman_with_GP.jpg',price:'$120.00', timeLeft:'6'},
      {name:'Conflict Resolution', img:'http://sekojstudent.org/wp-content/uploads/2016/07/conflict-resolution-strategies.jpg',price:'$230', timeLeft:'7'}, 
      {name:'Chaperoning', img:'https://i.ytimg.com/vi/4OkZocjuM6U/hqdefault.jpg',price:'$120', timeLeft:'7'},   
    ]
  }

}
