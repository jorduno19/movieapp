import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieDbService } from "../movie-db.service";
import { TopService } from "../top.service";
import { FavoriteService } from "../favorite.service";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {

  constructor(private fav$: FavoriteService) { }

  ngOnInit() {
    this.fav$.getFavorite()
  }

}
