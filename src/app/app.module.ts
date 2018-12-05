import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChooserComponent } from './chooser/chooser.component';
import {ImageService} from './image.service';
import {HttpClientModule} from '@angular/common/http';
import { CharacterChooserComponent } from './character-chooser/character-chooser.component';
import { SpriteChooserComponent } from './character-chooser/sprite-chooser/sprite-chooser.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ChooserComponent,
    CharacterChooserComponent,
    SpriteChooserComponent
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
