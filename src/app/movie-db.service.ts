import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MovieDbService {
    // https://api.themoviedb.org/3/search/movie?api_key=dbdc8bf28d385f5fe11df7fc8b948e5b&language=en-US&query=batman&page=1&include_adult=false
    url: string = "https://api.themoviedb.org/3/search/movie?";
    api: string ="api_key=dbdc8bf28d385f5fe11df7fc8b948e5b";
    language: string = "&language=en-US";
    query: string = "&query=";
    movie: string = "";
    page: string = "&page=1";
    adultInclude: string = "&include_adult=false";
    
    base_url: string = "https://image.tmdb.org/t/p/w500";
    
    movieData: any;
  constructor(public http: HttpClient) { }
  
  getMovieData(){
      console.log(this.movie);
      this.http.get( this.url + this.api + this.language + this.query + this.movie + this.page + this.adultInclude )
        .subscribe ( data => {this.movieData = data;
            console.log("service", this.movieData.results)}
        )
  }
}


//Search result return
// adult: false
// backdrop_path: "/2blmxp2pr4BhwQr74AdCfwgfMOb.jpg"
// genre_ids: (2) [14, 28]
// id: 268
// original_language: "en"
// original_title: "Batman"
// overview: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker, who has seized control of Gotham's underworld."
// popularity: 11.537327
// poster_path: "/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg"
// release_date: "1989-06-23"
// title: "Batman"
// video: false
// vote_average: 7
// vote_count: 2295