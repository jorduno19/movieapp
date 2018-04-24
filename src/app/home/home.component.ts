import { Component,  OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { MovieDbService } from "../movie-db.service";
import { TopService } from "../top.service";
import { UpcomingService } from "../upcoming.service";
import { FavoriteService } from "../favorite.service";
import { Observable } from 'rxjs/Observable';

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent {

}
