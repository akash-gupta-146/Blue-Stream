import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { ForgetPasswordPage } from '../pages/login/forget-password/forget-password';
import { AllCoursesPage } from '../pages/allCourses/allCourses';
import { SignedInPage } from '../pages/signedIn/signedin';
import { MyCoursesPage } from '../pages/myCourses/myCourses';
import { CourseDetailsPage } from '../pages/courseDetails/courseDetails';
import { CourseListPage } from '../pages/courseList/courseList';
import { IntroductionPage } from '../pages/courseDetails/introduction/introduction';
import { ConsentPage } from '../pages/courseDetails/consent/consent';
import { BuyCoursePage } from '../pages/buyCourse/buyCourse';
import { LearningOutcomePage } from '../pages/courseDetails/consent/questions/learningOutcomes/learningOutcomes';
import { InformationConsentPage } from '../pages/courseDetails/consent/questions/informationConsent/informationConsent';
import { ButtonInformationPage } from '../pages/courseDetails/consent/questions/buttonInformation/buttonInformation';
import { RelatedInformationPage } from '../pages/courseDetails/consent/questions/relatedInformation/relatedInformation';
import { RefusalFormsPage } from '../pages/courseDetails/consent/questions/refusalForms/refusalForms';
import { Test1Page } from '../pages/courseDetails/consent/questions/test1/test1';
import { Test2Page } from '../pages/courseDetails/consent/questions/test2/test2';
import { sidebarSubscribedCoursesPage } from '../pages/sidebarPages/sidebarSubscribedCourses';
import { SidebarCourseCategoriesPage } from '../pages/sidebarPages/sidebarCourseCategories';
import { SidebarNewCoursesPage } from '../pages/sidebarPages/sidebarNewCourses';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterWithEmailPage } from '../pages/registerWithEmail/registerWithEmail';
import { ICModelPage } from '../pages/courseDetails/consent/questions/informationConsent/model/model';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WelcomePage,
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    ForgetPasswordPage,
    AllCoursesPage,
    SignedInPage,
    MyCoursesPage,
    CourseDetailsPage,
    CourseListPage,
    IntroductionPage,
    ConsentPage,
    BuyCoursePage,
    LearningOutcomePage,
    InformationConsentPage,
    ButtonInformationPage,
    RelatedInformationPage,
    RefusalFormsPage,
    Test1Page,
    Test2Page,
    sidebarSubscribedCoursesPage,
    SidebarCourseCategoriesPage,
    SidebarNewCoursesPage,
    ProfilePage,
    RegisterWithEmailPage,
    ICModelPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    WelcomePage,
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    ForgetPasswordPage,
    AllCoursesPage,
    SignedInPage,
    MyCoursesPage,
    CourseDetailsPage,
    CourseListPage,
    IntroductionPage,
    ConsentPage,
    BuyCoursePage,
    LearningOutcomePage,
    InformationConsentPage,
    ButtonInformationPage,
    RelatedInformationPage,
    RefusalFormsPage,
    Test1Page,
    Test2Page,
    sidebarSubscribedCoursesPage,
    SidebarCourseCategoriesPage,
    SidebarNewCoursesPage,
    ProfilePage,
    RegisterWithEmailPage,
    ICModelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
