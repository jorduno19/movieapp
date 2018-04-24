import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FavoriteService {
    
    favorite: any;
    see_fav: any;
    userId = sessionStorage.getItem('userId');
    baseUrl = "http://james-winter-2017-phortonssf.c9users.io:8080/api/appUsers/";
    movieId = "";
    score = "";
    progress = "";
    
  constructor(public http: HttpClient) { }
    
    getFavorite() {
      console.log(this.userId);
      this.http.get(this.baseUrl+ this.userId +"/favorites")
      .subscribe (data => {this.favorite = data; 
      console.log("mylist", this.favorite)}
      )
    }
    
    getFavoriteById(id) {
      this.http.get(this.baseUrl + this.userId + /favorites/ + id)
      .subscribe (data => {this.see_fav = data; 
      console.log("service", this.see_fav)}
      )
    }
    
    addFavorite(favMovie) {
      this.http.post(this.baseUrl + favMovie.userId +"/favorites", favMovie)
      .subscribe();
      this.getFavorite()
    }
  
    favDelete(id) {
        var removeFav = this.favorite.map(function(entry) {return entry.id;}).indexOf(id);
        this.favorite.splice(removeFav, 1)
        console.log(this.favorite)
        console.log(id)
        this.http.delete(this.baseUrl + this.userId + "/favorites/" + id)
        .subscribe()
    }
    
    // editFavorite(edit) {
    //   console.log(edit)
    //   this.http.put(this.baseUrl + this.userId + "/favorites/" + this.favorite.id, edit)
    // }
 

}
