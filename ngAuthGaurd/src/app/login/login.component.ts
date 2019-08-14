import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private cookie: CookieService, private router: Router) { }

  onSubmit(): void {
    this.cookie.set('token', 'xyz-mno-abc-%123-gdhs-%jgdf%-k');
    this.router.navigate(['/'])
  }

  ngOnInit() {
  }

}
