import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "./header/header.component";
import { PlayerWrapperComponent } from "./player-wrapper/player-wrapper.component";

import { MatVideoModule } from 'mat-video';

@NgModule({
  imports: [ MatVideoModule, CommonModule, FormsModule, IonicModule],
  declarations: [HeaderComponent, PlayerWrapperComponent],
  entryComponents: [PlayerWrapperComponent],
  exports: [HeaderComponent, PlayerWrapperComponent]
})
export class SharedModule {}
