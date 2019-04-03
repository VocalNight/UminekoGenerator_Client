import { Component, OnInit } from '@angular/core';
import {ImageService} from '../services/image.service';

@Component({
  selector: 'app-character-chooser',
  templateUrl: './character-chooser.component.html',
  styleUrls: ['./character-chooser.component.css']
})
export class CharacterChooserComponent implements OnInit {
  chars: Array<any>;
  showSprites = false;
  charSelected: string;


  constructor(public imageService: ImageService) { }

  ngOnInit() {
    this.imageService.getChars().subscribe(characters =>
    this.chars = characters);
  }

  onSelect(name: string) {
     this.charSelected = name;
    this.showSprites = !this.showSprites;
  }

}
