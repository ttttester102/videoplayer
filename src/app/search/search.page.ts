import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.page.html",
  styleUrls: ["./search.page.scss"]
})
export class SearchPage implements OnInit {
  public images: string[] = [
    "https://www.gulte.com/content/2019/08/photos/movies/Saaho-Movie-Latest-Posters/Saaho-Movie-Latest-Posters.jpg",
    "https://i.ytimg.com/vi/848q7WLmwbk/maxresdefault.jpg",
    "https://in.bookmyshow.com/entertainment/wp-content/uploads/2018/11/2.0-Movie-Article_960x540.jpg",
    "https://www.gulte.com/content/2019/08/photos/movies/Saaho-Movie-Latest-Posters/Saaho-Movie-Latest-Posters.jpg",
    "https://i.ytimg.com/vi/848q7WLmwbk/maxresdefault.jpg",
    "https://in.bookmyshow.com/entertainment/wp-content/uploads/2018/11/2.0-Movie-Article_960x540.jpg",
    "https://www.gulte.com/content/2019/08/photos/movies/Saaho-Movie-Latest-Posters/Saaho-Movie-Latest-Posters.jpg",
    "https://i.ytimg.com/vi/848q7WLmwbk/maxresdefault.jpg",
    "https://in.bookmyshow.com/entertainment/wp-content/uploads/2018/11/2.0-Movie-Article_960x540.jpg"
  ];
  public LIST_VIEW: string = "list_view";
  public GRID_VIEW: string = "grid_view";
  public view_type: string = "";
  constructor() {
    this.view_type = this.LIST_VIEW;
  }

  ngOnInit() {}
}
