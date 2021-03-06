import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

//mis importaciones
import { AngularFireAuth } from '@angular/fire/auth';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
      private platform: Platform,
      private splashScreen: SplashScreen,
      private statusBar: StatusBar,
      private router: Router,
      private fireAuth: AngularFireAuth
    ) {
      this.initializeApp();
    }
  
    initializeApp() {
      this.platform.ready().then(() => {
        this.fireAuth.auth.onAuthStateChanged(user => {
          if (user) {
            this.router.navigate(["/home/horario"]);
            this.splashScreen.hide();
          }
          else {
            this.router.navigate(["/"]);
            this.splashScreen.hide();
          }
        })
        this.statusBar.styleDefault();
      });
    }
  }
