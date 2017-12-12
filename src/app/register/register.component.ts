import { Component, OnInit } from '@angular/core';
import { UserService  } from "../user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user = {};
  constructor( private user$: UserService) { }
  
  ngOnInit() {
  }
  onSubmit(){
    this.user$.registerUser(this.user)
  }  
  toLogin(){
    this.user$.toLogin()
  }

}
