import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION, NgxUiLoaderHttpModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { AppComponent } from './app.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: '#e53935',
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce,
  fgsType: SPINNER.squareJellyBox,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5,
  hasProgressBar: false
};
/*
bgsColor: '#OOACC1',
bgsOpacity: 0.5,
bgsPosition: POSITION.bottomCenter,
bgsSize: 60,
bgsType: SPINNER.rectangleBounce,
fgsColor: '#00ACC1',
fgsPosition: POSITION.centerCenter,
fgsSize: 60,
fgsType: SPINNER.chasingDots,
logoUrl: 'assets/angular.png',
pbColor: '#FF0000',
pbDirection: PB_DIRECTION.leftToRight,
pbThickness: 5,
text: 'Welcome to ngx-ui-loader',
textColor: '#FFFFFF',
textPosition: POSITION.centerCenter
*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule,
    // NgxUiLoaderRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
