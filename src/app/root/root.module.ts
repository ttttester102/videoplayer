import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { RootPage } from "./root.page";

const routes: Routes = [
  {
    path: "tabs",
    component: RootPage,
    children: [
      {
        path: "home",
        loadChildren: "../home/home.module#HomePageModule"
      },
      {
        path: "search",
        loadChildren: "../search/search.module#SearchPageModule"
      },
      {
        path: "favorite",
        loadChildren: "../favorite/favorite.module#FavoritePageModule"
      },
      {
        path: "",
        redirectTo: "/root/tabs/home",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RootPage]
})
export class RootPageModule {}
