import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class UserService {
  baseUrl: string = "http://james-winter-2017-phortonssf.c9users.io:8080/api/appUsers";
  returnUrl: string = "popularmovie";
  loginPage: string = "";
  userData: any;
  constructor( 
    private http: HttpClient,
    private router: Router 
  ) { }

  toLogin(){
    this.router.navigate([this.loginPage])  
  }

  registerUser(userData){
    this.http.post(`${this.baseUrl}`, userData)
      .subscribe( resData => {
        this.toHomePage(resData)
      })
  }

  loginUser(userData){
    this.http.post(`${this.baseUrl}/login`, userData)
      .subscribe( resData => {
        this.userData = resData["userData"];
        console.log("$ data", this.userData)
        this.toHomePage(resData)
      })
  }

  toHomePage(resData){
    //Save data from our succesfull login in sessionStorage
    window.sessionStorage.setItem( "token", resData.token)
    window.sessionStorage.setItem( "userId", resData.userId)
    
    this.router.navigate([this.returnUrl])   
  }
}