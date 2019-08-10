import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor() {
    this.init();
  }

  ngOnInit() { }

  init = async () => {
    $("#dd").on('click', function (event) {
      $(this).toggleClass('active');
      event.stopPropagation();
    });
  }

}
