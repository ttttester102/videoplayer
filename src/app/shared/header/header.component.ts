import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
declare var $;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(public menu: MenuController) {
    this.init();
  }

  ngOnInit() { }

  init = async () => {
    $("#dd").on('click', function (event) {
      $(this).toggleClass('active');
      event.stopPropagation();
    });
  }

  toggleBtn = () => {
    this.menu.toggle('sidebar');
  }

}
