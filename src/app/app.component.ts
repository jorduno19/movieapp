import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieDbService } from "./movie-db.service";
import { TopService } from "./top.service";
import { FavoriteService } from "./favorite.service";
import { UserService } from "./user.service";
import { Observable } from 'rxjs/Observable';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
    movieData: any;
    popular: any;
    favorite: any;
    
    // favorites: string[] = [];
    // favorite: string = "";
    
    constructor(
        private router: Router, 
        private movieDB$: MovieDbService, 
        private top$: TopService, 
        private fav$: FavoriteService, 
        private user$: UserService
        ) {}
    
    search() {
      this.movieDB$.getMovieData()
    }
   
   
    ngOnInit() {
      this.top$.getPopular()
    }
  
    popularMovies() {
      this.top$.getPopular()
    }
   
}
