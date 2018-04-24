import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieDbService } from "../movie-db.service";
import { TopService } from "../top.service";
import { FavoriteService } from "../favorite.service";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private movieDB$: MovieDbService, private fav$: FavoriteService) { }

  ngOnInit() {
  }

   addFavorite(movie) {
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
      favMovie.id = movie.id;
      favMovie.title = movie.title;
      favMovie.poster_path = movie.poster_path;
      favMovie.release_date = movie.release_date;
      favMovie.overview = movie.overview;
      console.log(favMovie)
      this.fav$.addFavorite(favMovie)
    }
}
// email: "jorduno19@gmail.com"
// favorites: [{…}]
// firstName: "James"
// id: "5a2f5d80a5d6ab3a7b0e6a0d"
// lastName: "Orduno"