import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieDbService } from "../movie-db.service";
import { TopService } from "../top.service";
import { FavoriteService } from "../favorite.service";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss'],

})
export class PopularMoviesComponent implements OnInit {

  constructor(private top$: TopService, private fav$: FavoriteService) { }

  ngOnInit() {
    this.top$.getPopular()
  }
  
  addFavorite(popular) {
      let favMovie = {
        id: "",
        title: "",
        poster_path: "",
        release_date: "",
        overview: "",
        score: "",
        progress: "",
        userId: ""
      };
      favMovie.userId = sessionStorage.getItem('userId');
      favMovie.id = popular.id;
      favMovie.title = popular.title;
      favMovie.poster_path = popular.poster_path;
      favMovie.release_date = popular.release_date;
      favMovie.overview = popular.overview;
      console.log(favMovie)
      this.fav$.addFavorite(favMovie)
    }
}
