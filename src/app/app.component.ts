import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  public menuData: any[] = [
    {
      isHeader: true,
      label: "Videos"
    },
    {
      filePath: "/assets/icon/video.png",
      label: "Animated",
      index: 1
    },
    {
      filePath: "/assets/icon/video.png",
      label: "Comedy",
      index: 2
    },
    {
      filePath: "/assets/icon/video.png",
      label: "Movie Clips",
      index: 3
    },
    {
      filePath: "/assets/icon/video.png",
      label: "Motivational",
      index: 4
    },
    {
      isHeader: true,
      label: "Manage"
    },
    {
      icon: "md-settings",
      label: "Settings",
      index: 5
    }
  ];
  public selectedIndex: number = 0;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }

  selectIndex = (index: number) => {
    if (!index) return;
    
    this.selectedIndex = index;
  };
}
