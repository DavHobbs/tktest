import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { LobbyPage } from '../pages/lobby/lobby';
import { QuestionPage } from '../pages/question/question';
import { HistoryPage } from "../pages/history/history";
import { ResultsPage } from "../pages/results/results";
import { AppUserProvider } from '../providers/app-user/app-user';
import { QuestionsProvider } from '../providers/questions/questions';
import { TestResultsProvider } from '../providers/test-results/test-results';
import { LandingPage } from '../pages/landing/landing';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';

let injections: any[] = [
    MyApp,
    LobbyPage,
    QuestionPage,
    HistoryPage,
    ResultsPage,
    LandingPage,
    RegisterPage,
    LoginPage
  ];
@NgModule({
  declarations: injections,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [SplashScreen, StatusBar, {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppUserProvider,
    QuestionsProvider,
    TestResultsProvider]
  })
  
export class AppModule {}
