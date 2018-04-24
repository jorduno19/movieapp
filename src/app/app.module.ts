import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";

// COMPONENTS //
import { HomeComponent } from "./home/home.component";
import { MyListComponent } from './my-list/my-list.component';
import { FavListComponent } from './fav-list/fav-list.component';
import { SearchComponent } from './search/search.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { FavEditComponent } from './fav-edit/fav-edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// SERVICES //
import { MovieDbService } from "./movie-db.service";
import { TopService } from "./top.service";
import { FavoriteService } from "./favorite.service";
import { MovieService } from "./movie.service";
import { UserService } from "./user.service";
import { UpcomingService } from "./upcoming.service";
import { ProfileComponent } from './profile/profile.component';
import { MovieProfileComponent } from './movie-profile/movie-profile.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { MyListCardComponent } from './my-list-card/my-list-card.component';
import { MoviePageComponent } from './movie-page/movie-page.component';




@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MyListComponent,
        SearchComponent,
        PopularMoviesComponent,
        FavListComponent,
        FavEditComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        MovieProfileComponent,
        UpcomingComponent,
        MyListCardComponent,
        MoviePageComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ClarityModule,
        ROUTING
    ],
    providers: [MovieDbService, TopService, FavoriteService, MovieService, UserService, UpcomingService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
