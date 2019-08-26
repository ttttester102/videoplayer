import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }

}
