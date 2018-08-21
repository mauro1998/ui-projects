import { Component, Input } from '@angular/core';

@Component({
  selector: 'lux-callout',
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.scss']
})
export class CalloutComponent {
  @Input() src: string;
  @Input() title: string;
  @Input() text: string;
  @Input() size = 'xs';
  @Input() forceSize = true;

  constructor() { }

  getCSSClasses() {
    if (!this.size) return '';

    let css = this.forceSize ? 'size--force' : '';

    switch (this.size.toLocaleUpperCase()) {
      case 'SM':
        css += ' size--sm';
        break;
      case 'MD':
        css += ' size--md';
        break;
      case 'LG':
        css += ' size--lg';
        break;
      default: break;
    }

    return css;
  }

}
