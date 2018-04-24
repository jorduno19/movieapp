import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class UpcomingService {
    upcoming: any;

  constructor(
      private http: HttpClient, 
      private router: Router 
      ) { }
    
    getUpcoming() {
      console.log();
      this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=dbdc8bf28d385f5fe11df7fc8b948e5b&language=en-US&page=1")
      .subscribe (data => {this.upcoming = data; 
      console.log("upcoming", this.upcoming.results)}
      )
  }
}
