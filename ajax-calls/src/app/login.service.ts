import { Injectable } from '@angular/core';
import {Http, Request} from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: Http) { }
  login(user){
    console.log(user);
    return this.http.post('http://onesevenhome.com:8080/shop/user/login', user).pipe(map(
      resp =>{
        return resp.json();
      }
    ))
  }
}