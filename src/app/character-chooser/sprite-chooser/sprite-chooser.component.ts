import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from '../../image.service';

@Component({
  selector: 'app-sprite-chooser',
  templateUrl: './sprite-chooser.component.html',
  styleUrls: ['./sprite-chooser.component.css']
})
export class SpriteChooserComponent implements OnInit {
  @Input() character: string;
  sprites: Array<any>;

  constructor(public imageService: ImageService) {

  }

  ngOnInit() {
    this.imageService.getSprites(this.character).subscribe(charSprites =>
     this.sprites = charSprites);
  }

}
