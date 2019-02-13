import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ImageService} from '../image.service';

@Component({
  selector: 'app-chooser',
  templateUrl: './chooser.component.html',
  styleUrls: ['./chooser.component.css']
})
export class ChooserComponent implements OnInit {
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
