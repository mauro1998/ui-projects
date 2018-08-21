import { Component, Input } from '@angular/core';

@Component({
  selector: 'lux-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() src: string;
  @Input() opacity: number = 0.5;
  @Input() location: string = 'center';

  constructor() { }

  getCSSClasses() {
    const str = this.location.toUpperCase().trim();
    if (!str) return;
    if (str === 'CENTER' || str === 'CENTER CENTER') return 'centered';

    let css = '';
    const location = str.split(' ');
    const x = location[0];
    const y = location[1];

    switch (x) {
      case 'LEFT':
        css += ' ';
        break;
      case 'RIGHT':
        css += 'x-side--right ';
        break;
      case 'CENTER':
      default:
        css += 'x-side--center ';
        break;
    }

    switch (y) {
      case 'TOP':
        css += 'y-side--top ';
        break;
      case 'CENTER':
      default:
        css += 'y-side--center ';
        break;
    }

    return css;
  }

  getImageSrc() {
    const src = `linear-gradient(rgba(0, 0, 0, ${this.opacity}), rgba(0, 0, 0, ${this.opacity})), url(${this.src})`;
    return { backgroundImage: src };
  }

}
