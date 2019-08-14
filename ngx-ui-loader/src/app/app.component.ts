import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NGX UI Loader';
  constructor(private ngxService: NgxUiLoaderService) { }

  loadSpinner(): void {
    this.ngxService.start();
    setTimeout(() => {
      this.ngxService.stop();
    }, 5000);
  }
  ngOnInit() {
    this.ngxService.start();

    setTimeout(() => {
      this.ngxService.stop();
    }, 5000);
  }
}
