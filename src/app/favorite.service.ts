import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FavoriteService {
    
    favorite: any;
    userId = sessionStorage.getItem('userId');
    
  constructor(public http: HttpClient) { }
  
    getFavorite() {
      console.log();
      this.http.get("http://james-winter-2017-phortonssf.c9users.io:8080/api/appUsers/"+ this.userId +"/favorites")
      .subscribe (data => {this.favorite = data; 
      console.log("service", this.favorite)}
      )
    }
    
    addFavorite(favMovie) {
      this.http.post("http://james-winter-2017-phortonssf.c9users.io:8080/api/appUsers/"+ favMovie.userId +"/favorites", favMovie)
      .subscribe();
    }
  
//   favDelete() {
//       this.http.delete("http://james-winter-2017-phortonssf.c9users.io:8080/api/favorites/" + this.id)
      
//   }
 
//   favPatch() {
//       this.http.patch("http://james-winter-2017-phortonssf.c9users.io:8080/api/favorites/" + this.id)
//   }

}
