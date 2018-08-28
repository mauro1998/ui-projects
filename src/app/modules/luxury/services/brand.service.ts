import { Injectable } from '@angular/core';
import { shuffle } from './utils';

@Injectable()
export class BrandService {
  private brands = [];

  constructor() {
    this.brands = [
      { src: 'assets/images/luxury/brands/accurist.jpg' },
      { src: 'assets/images/luxury/brands/armani.jpg' },
      { src: 'assets/images/luxury/brands/axss.jpg' },
      { src: 'assets/images/luxury/brands/boss.png' },
      { src: 'assets/images/luxury/brands/casio.jpg' },
      { src: 'assets/images/luxury/brands/citizen.jpg' },
      { src: 'assets/images/luxury/brands/fossil-q.png' },
      { src: 'assets/images/luxury/brands/fossil.jpg' },
      { src: 'assets/images/luxury/brands/gshock.png' },
      { src: 'assets/images/luxury/brands/guess.png' },
      { src: 'assets/images/luxury/brands/kors.jpg' },
      { src: 'assets/images/luxury/brands/movado.jpg' },
      { src: 'assets/images/luxury/brands/nixon.png' },
      { src: 'assets/images/luxury/brands/ob.jpg' },
      { src: 'assets/images/luxury/brands/rebecca-minkoff.png' },
      { src: 'assets/images/luxury/brands/rotary.jpg' },
      { src: 'assets/images/luxury/brands/tissot.jpg' },
      { src: 'assets/images/luxury/brands/tommy.jpg' },
    ];
  }

  fetch() {
    return shuffle(this.brands);
  }

}
