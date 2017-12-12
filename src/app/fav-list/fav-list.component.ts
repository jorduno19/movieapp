import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieDbService } from "../movie-db.service";
import { TopService } from "../top.service";
import { FavoriteService } from "../favorite.service";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.scss'],
})
export class FavListComponent implements OnInit {
  
  favorites: string[] = [];
  favorite: string = "";
  
  constructor(private fav$: FavoriteService) { }

  ngOnInit() {
    this.fav$.getFavorite()
  }
  
  addFavorite(favorite: string): void{
       this.favorites.push( favorite )
       console.log("movie added to favorites")
       console.log(this.favorites)
   } 

}
