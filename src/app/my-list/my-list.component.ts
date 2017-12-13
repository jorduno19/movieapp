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
    
  editFavorite(favorite) {
    const id = favorite.id;
    this.fav$.getFavoriteById(id)
  }
  
  favDelete(favorite) {
    const id = favorite.id;
    this.fav$.favDelete(id)
  }

}




// email: "jorduno19@gmail.com"
// favorites: [{…}]
// firstName: "James"
// id: "5a2f5d80a5d6ab3a7b0e6a0d"
// lastName: "Orduno"