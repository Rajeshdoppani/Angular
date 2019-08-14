import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  user = {}
  constructor(private loginService:LoginService) {
    this.user;
  }

  login(user){
    console.log(user);
    this.loginService.login(user).subscribe(data=>{
      this.user = data;
	  alert(data.name);
    })
  }

  ngOnInit() {
  }

}