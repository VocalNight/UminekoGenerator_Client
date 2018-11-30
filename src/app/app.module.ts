import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChooserComponent } from './chooser/chooser.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ChooserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
