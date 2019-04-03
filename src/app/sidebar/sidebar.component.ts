import { Component, OnInit } from '@angular/core';
import {GeneratedScreenshot} from './GeneratedScreenshot';
import {ImageService} from '../services/image.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  image: GeneratedScreenshot = new GeneratedScreenshot();
  buttonBg: string;
  showBg = false;
  charLeft = false;
  constructor(private imageService: ImageService) {}

  ngOnInit() {
  }

  onBackgroundSelected(name: string) {
    this.image.backgroundSrc = name;
    this.buttonBg = this.imageService.bgPath + name;
    console.log(this.image);
  }

  showBackgrounds() {
    this.showBg = !this.showBg;
    this.charLeft = false;
  }

  showCharLeft() {
    this.charLeft = !this.charLeft;
    this.showBg = false;
  }

}
