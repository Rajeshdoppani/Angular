import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#8db7ba', 
      secondaryColour: '#53b5bc', 
      tertiaryColour: '#0bd4e2'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
