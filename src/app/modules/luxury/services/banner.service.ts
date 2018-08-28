import { Injectable } from '@angular/core';
import { rand } from './utils';

@Injectable()
export class BannerService {
  private src = [];
  private leadins = [];
  private texts = [];

  constructor() {
    for (let i = 1; i <= 5; i++) {
      this.src.push(`assets/images/luxury/banners/${i}.jpg`);
    }

    this.leadins = [
      'Cientos de diseños',
      'Las marcas más populares',
      'Las mejores promociones',
    ];

    this.texts = [
      'Explora nuestro gran catálogo de relojes.',
      'Cientos de diseños de las marcas más populares.',
      'Descubre el reloj perfecto para ti.',
      'Descubre las promociones más increíbles.',
      'Diseños exclusivos para hombres y mujeres.',
      'Te ofrecemos la posibilidad de vender tu reloj.',
      'Aprovecha nuestras promociones.',
    ];
  }

  fetch() {
    const banners = [];

    for (let i = 0; i < 5; i++) {
      banners.push({
        src: this.src[i],
        leadin: rand(this.leadins),
        opacity: 0.4,
        text: [rand(this.texts), rand(this.texts), rand(this.texts)],
        action: 'Explorar',
        href: '/catalog',
      });
    }

    return banners;
  }

}
