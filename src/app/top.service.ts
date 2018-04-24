import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TopService {
    popular: any;

  constructor(public http: HttpClient) { }
  
  getPopular() {
      console.log();
      this.http.get("https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=dbdc8bf28d385f5fe11df7fc8b948e5b")
      .subscribe (data => {this.popular = data; 
      console.log("popular", this.popular.results)}
      )
  }
}

// https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=dbdc8bf28d385f5fe11df7fc8b948e5b