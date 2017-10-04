import { Component } from '@angular/core';
import { NavController , ModalController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { AllCoursesPage } from '../allCourses/allCourses';


@Component({
  selector: 'welcome',
  templateUrl: 'welcome.html',
  styles:[`
  ion-content{
      background-image: url('assets/images/girl_boy_study.jp');
      background-size:cover;
  }
  .instructor{
      width:100px !important;
  }
  .swiper-pagination-bullet-active{
      background: white !important;
  }
  .icon{
    font-size:30px;
  }
  `]
})
export class WelcomePage {
    title: 'Welcome'
  constructor( public modalCtrl: ModalController , public navCtrl: NavController ) {}

  openRegisterModal() {
    // let myModal = this.modalCtrl.create(RegisterPage);
    // myModal.present();

    this.navCtrl.push(RegisterPage);
  }

  openLoginModal() {
    // let myModal = this.modalCtrl.create(LoginPage);
    // myModal.present();
    this.navCtrl.push(LoginPage);
  }

  openAllCoursesPage(){
      this.navCtrl.push(AllCoursesPage);
  }
}
