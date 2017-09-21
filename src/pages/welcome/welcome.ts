import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { RegisterPage } from '../register/register';


@Component({
  selector: 'welcome',
  templateUrl: 'welcome.html',
  styles:[`
  ion-content{
      background-image: url('assets/images/girl_boy_study.jp');
      background-size:cover;
  }
  ion-slides{
      height:auto !important;
  }
  .instructor{
      width:100px !important;
  }
  .swiper-pagination-bullet-active{
      background: white !important;
  }
  `]
})
export class WelcomePage {
    title: 'Welcome'
  constructor() {}

}
