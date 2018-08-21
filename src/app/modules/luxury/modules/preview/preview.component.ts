import { Component, Input } from '@angular/core';

@Component({
  selector: 'lux-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {
  @Input() type: string = '';
  @Input() size: string = 'SM';

  constructor() { }

  getCSSClasses() {
    let size;

    switch (this.size.toUpperCase()) {
      case 'XS':
        size = 'extra-small'
        break;
      case 'MD':
        size = 'medium'
        break;
      case 'LG':
        size = 'large'
        break;
      case 'SM':
      default:
        size = 'small';
        break;
    }

    return `preview--${size} preview--${this.type}`;
  }

}
