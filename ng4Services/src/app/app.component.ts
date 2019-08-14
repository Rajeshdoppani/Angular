import { Component } from '@angular/core';
import { MyServService } from './my-serv.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng 4 Services';
  user= {
    firstName: '',
    lastName: ''
  };
  constructor(private myService: MyServService) {
    console.log(MyServService.API_Base_URL);
  }
  
  clickMe(user){               
    console.log(user);
  };
  
  ngOnInit(){

  }
}