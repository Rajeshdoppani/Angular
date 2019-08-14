import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng4 Spinner';
  public loading = false;
  constructor(){

  }
  login() {
    this.loading = true;
    setTimeout(()=> function(){
      this.loading = false;
    },5000)
  };
}
