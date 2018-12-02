import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChooserComponent } from './chooser/chooser.component';
import {ImageService} from './image.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ChooserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
