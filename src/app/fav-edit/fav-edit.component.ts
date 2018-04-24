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
  // edit: any = {
    
  // }
  
  constructor(private fav$: FavoriteService) { }

  ngOnInit() {
  }
  
  // favorite = this.fav$.favorite;
  
  // onSubmit(favorite) {
  //   let edit = {
  //     score: "",
  //     progress: ""
  //   };
  //   edit.score = this.fav$.score;
  //   edit.progress = this.fav$.progress;
  //   this.fav$.editFavorite(edit)
  // }
}
