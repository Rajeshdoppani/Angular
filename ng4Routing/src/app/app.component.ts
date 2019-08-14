import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Ng4 Routing';
  menuData = [{ path: 'product', pathName : 'Product'}, { path: 'members', pathName : 'Members' }];
}
