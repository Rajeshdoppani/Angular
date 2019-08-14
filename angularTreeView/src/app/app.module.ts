import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Tree View Modules //
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TreeViewModule,
    DateInputsModule,
    IntlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
