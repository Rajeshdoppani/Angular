import { Component } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Ng4 Loader';
  // template: string =`<img src="https://cdn.dribbble.com/users/232693/screenshots/2108657/blue-dna.gif" />`
  // template: string =`<img src="https://loading.io/spinners/flower/lg.peacock-flower-spinner.gif" class="loaderCenter"/>`
  template: string =`<img src="assets/loader.gif" class="loaderCenter"/>`
  constructor( private spinnerService: Ng4LoadingSpinnerService ){
    this.spinnerService.show();

    setTimeout(()=>{
      this.spinnerService.hide();
    }, 5000);

  }
}
