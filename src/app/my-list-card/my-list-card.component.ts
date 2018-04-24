import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieDbService } from "../movie-db.service";
import { TopService } from "../top.service";
import { FavoriteService } from "../favorite.service";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-my-list-card',
  templateUrl: './my-list-card.component.html',
  styleUrls: ['./my-list-card.component.scss']
})
export class MyListCardComponent implements OnInit {

  favorites: string[] = [];
  favorite: string = "";
  
  constructor(private fav$: FavoriteService) { }

  ngOnInit() {
    this.fav$.getFavorite()
  }
}
