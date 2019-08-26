import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-player-wrapper",
  templateUrl: "./player-wrapper.component.html",
  styleUrls: ["./player-wrapper.component.scss"]
})
export class PlayerWrapperComponent implements OnInit {

  public showHeader: boolean = true;
  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {
    this._showHeader();
  }

  _showHeader = () => {
    this.showHeader = true;
    setTimeout(() => {
      this.showHeader = false;
    }, 3000);
  }

  closeModal = () => {
    this.modalCtrl.dismiss();
  };
}
