import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthProvider } from '../providers/auth';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';



export const firebaseConfig = {
    apiKey: "AIzaSyCgoeEMDh9opWiKyn0UmZtgizncWgE0eIQ",
    authDomain: "fir-11-755e3.firebaseapp.com",
    databaseURL: "https://fir-11-755e3.firebaseio.com",
    projectId: "fir-11-755e3",
    storageBucket: "fir-11-755e3.appspot.com",
    messagingSenderId: "701371349479"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SplashScreen,
    StatusBar, 
    AuthProvider
  ]
})
export class AppModule {}
