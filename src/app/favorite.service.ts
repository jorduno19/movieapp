import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FavoriteService {
    
    favorite: any;
    userId = sessionStorage.getItem('userId');
    baseUrl = "http://james-winter-2017-phortonssf.c9users.io:8080/api/appUsers/";
    movieId = "";
    
  constructor(public http: HttpClient) { }
    
    getFavorite() {
      console.log();
      this.http.get(this.baseUrl+ this.userId +"/favorites")
      .subscribe (data => {this.favorite = data; 
      console.log("service", this.favorite)}
      )
    }
    
    getFavoriteById(id) {
      this.http.get(this.baseUrl + this.userId + /favorites/ + id)
      .subscribe (data => {this.favorite = data; 
      console.log("service", this.favorite)}
      )
    }
    
    addFavorite(favMovie) {
      this.http.post(this.baseUrl + favMovie.userId +"/favorites", favMovie)
      .subscribe();
    }
  
  favDelete(id) {
      var removeFav = this.favorite.map(function(entry) {return entry.id;}).indexOf(id);
      this.favorite.splice(removeFav, 1)
      console.log(this.favorite)
    //Here add a function that removes from the favorite array
      console.log(id)
      this.http.delete(this.baseUrl + this.userId + "/favorites/" + id)
      .subscribe()
  }
 
     // getFavorite(userData) {
    //   console.log();
    //   this.http.get("http://james-winter-2017-phortonssf.c9users.io:8080/api/appUsers/"+ userData.id +"/favorites")
    //   .subscribe (data => {this.favorite = data; 
    //   console.log("service", this.favorite)}
    //   )
    // }
//   favPatch() {
//       this.http.patch("http://james-winter-2017-phortonssf.c9users.io:8080/api/favorites/" + this.id)
//   }

}
