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

}
// getFavorite() {
//     let userData = {
//       // email: "",
//       // favorite: "",
//       // firstName: "",
//       id: "",
//       // lastName: ""
//     };
//     userData.id = sessionStorage.getItem('userId');
//     this.fav$.getFavorite(userData)
//   }
// }

// email: "jorduno19@gmail.com"
// favorites: [{…}]
// firstName: "James"
// id: "5a2f5d80a5d6ab3a7b0e6a0d"
// lastName: "Orduno"