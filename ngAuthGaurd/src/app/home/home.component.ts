import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean = true;
  constructor(private cookie: CookieService) {

    this.checkIsLoggedIn();
  }

  checkIsLoggedIn() {
    this.isLoggedIn =  !this.cookie.get('token');
  }

  logout() {
    this.cookie.deleteAll();
    this.checkIsLoggedIn();

  }
  ngOnInit() {
  }

}
