import { Component } from '@angular/core';
import { UserService  } from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: any = {}
  
  constructor(private user$: UserService) { }

  onSubmit(){
   this.user$.loginUser(this.user)
  }
}
