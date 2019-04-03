import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatToolbarModule, MatCardModule} from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BackgroundChooserComponent } from './background-chooser/background.chooser.component';
import {ImageService} from './services/image.service';
import {HttpClientModule} from '@angular/common/http';
import { CharacterChooserComponent } from './character-chooser/character-chooser.component';
import { SpriteChooserComponent } from './character-chooser/sprite-chooser/sprite-chooser.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BackgroundChooserComponent,
    CharacterChooserComponent,
    SpriteChooserComponent,
    TextEditorComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
