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
        userId: ""
      };
      favMovie.userId = sessionStorage.getItem('userId');
      favMovie.id = movie.id;
      favMovie.title = movie.title;
      console.log(favMovie)
      this.fav$.addFavorite(favMovie)
    }
}
