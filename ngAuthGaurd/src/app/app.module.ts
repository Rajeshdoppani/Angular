import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Compponents //
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';

// Servives //
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';

// Guards //
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'events',
    component: EventsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EventsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CookieService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
