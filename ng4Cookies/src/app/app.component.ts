import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Ng 4 Cookies';
  cookieValue = "undefined";
  cookiesData;

  dataList = [
    {
      "film": "Jurasic Park",
      "releaseDate": "12-01-2001",
      "filmPath": "/jurassic_park",
      "parts": [{"part1":"Jurrasic Park1"}]
    },
    {
      "film": "Troy Story",
      "releaseDate": "12-01-2002",
      "filmPath": "/troy_story",
      "parts": []
    },
    {
      "film": "Evil Deal",
      "releaseDate": "12-01-2003",
      "filmPath": "/evil_dead/#",
      "parts": []
    }
  ];
  constructor(private cookieService: CookieService) {
    this.cookieService.set('menuData', JSON.stringify(this.dataList));
    this.cookieValue = JSON.parse(this.cookieService.get('menuData'));
    console.log(this.cookieValue);
  }
  clearCookies() {
    console.log(this.cookieService.getAll());
    this.cookieService.delete('menuData');
    this.cookieService.deleteAll();
    console.log(this.cookieService.getAll());
  }
}