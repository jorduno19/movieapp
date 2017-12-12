import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieDbService } from "../movie-db.service";
import { TopService } from "../top.service";
import { FavoriteService } from "../favorite.service";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-fav-edit',
  templateUrl: './fav-edit.component.html',
  styleUrls: ['./fav-edit.component.scss']
})
export class FavEditComponent implements OnInit {

  constructor(private fav$: FavoriteService) { }

  ngOnInit() {
  }

}
