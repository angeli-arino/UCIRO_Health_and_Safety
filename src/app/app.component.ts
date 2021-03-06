import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Import pages
import { TabsPage } from '../pages/tabs/tabs';
import { Login } from '../pages/login/login';

//Import angularFire
import { AngularFire } from 'angularfire2';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
  public af: AngularFire) {

    const authObserver = af.auth.subscribe( user => {
    if (user) {
      this.rootPage = TabsPage;
      authObserver.unsubscribe();
    } else {
      this.rootPage = Login;
      authObserver.unsubscribe();
    }
  });


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
