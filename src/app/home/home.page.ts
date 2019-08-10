import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
declare var $;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public platformType: "desktop" | "mobile" = "desktop";
  constructor(public platform: Platform) {
    this.init();
  }

  init = async () => {
    await this.platform.ready();

    $("#dd").on('click', function(event){
      $(this).toggleClass('active');
      event.stopPropagation();
  }); 

    this.platformType = this.platform.is("desktop") ? "desktop" : "mobile";
  }
}
