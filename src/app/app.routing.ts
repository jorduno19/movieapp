/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MyListComponent } from './my-list/my-list.component';
import { SearchComponent } from './search/search.component';
import { FavListComponent } from './fav-list/fav-list.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { FavEditComponent } from './fav-edit/fav-edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



export const ROUTES: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'mylist', component: MyListComponent},
    {path: 'search', component: SearchComponent},
    {path: 'favlist', component: FavListComponent},
    {path: 'popularmovie', component: PopularMoviesComponent},
    {path: 'favEdit', component: FavEditComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
    
    

    
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
