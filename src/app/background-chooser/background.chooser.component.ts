import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ImageService} from '../services/image.service';

@Component({
  selector: 'app-chooser',
  templateUrl: './background.chooser.component.html',
  styleUrls: ['./background.chooser.component.css']
})
export class BackgroundChooserComponent implements OnInit {
  backgrounds: Array<any>;
  @Output() selectedBackground = new EventEmitter<String>();

  constructor(public imageService: ImageService) { }

  ngOnInit() {
    this.imageService.getBackgrounds().subscribe(bgs =>
    this.backgrounds = bgs);
  }

  onSelect(name: String) {
    this.selectedBackground.emit(name);
  }
}
