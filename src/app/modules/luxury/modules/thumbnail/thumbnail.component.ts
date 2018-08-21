import { Component, Input } from '@angular/core';

@Component({
  selector: 'lux-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent {
  @Input() src: string;
  @Input() title: string;
  @Input() text: string;
  @Input() transparent = true;

  constructor() { }

}
