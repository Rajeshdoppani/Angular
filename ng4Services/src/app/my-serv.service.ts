import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServService {
  public static API_Base_URL = "http://103.92.235.45/HRMS/hrms";
  constructor() {
  }
  login(user) {
    console.log(user);
    return 'Login API Will Invoke...!!!'
  }
}
