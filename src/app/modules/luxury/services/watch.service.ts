import { Injectable } from '@angular/core';
import { shuffle, range, rand } from './utils';
import Watch from './watch.class';

@Injectable()
export class WatchService {
  private brands: any[];
  private refs: any[];
  private men = [];
  private women = [];
  private maxMen = 11;
  private maxWomen = 16;

  constructor() {
    for (let i = 1; i <= this.maxMen; i++) {
      this.men.push(`assets/images/luxury/watches/men/${i}.jpg`);
    }

    for (let i = 1; i <= this.maxWomen; i++) {
      this.women.push(`assets/images/luxury/watches/women/${i}.jpg`);
    }

    this.brands = [
      'MOVADO SE',
      'TISSOT V8',
      'OMEGA',
      'TISSOT PR100',
    ];

    this.refs = [
      'Pilot Black Dial Stainless Steel Chronograph',
      'Automatic Silver Dial',
      'Seamaster Planet Ocean 600M Automatic Chronometer',
      'Black Dial Black Leather Watch T1014511605100',
    ];
  }

  getRandomMenWatches(quantity = 8): Watch[] {
    const watches = [];

    for (let i = 0; i < quantity; i++) {
      const min = 100000;
      const oldprice = rand(shuffle([true, false])) ? null : range(min, 1000000);
      const price = range(min, oldprice);
      watches.push(new Watch(
        rand(this.men),
        rand(this.brands),
        rand(this.refs), oldprice, price
      ));
    }

    return watches;
  }

  getRandomWomenWatches(quantity = 8): Watch[] {
    const watches = [];

    for (let i = 0; i < quantity; i++) {
      const min = 100000;
      const oldprice = rand(shuffle([true, false])) ? null : range(min, 1000000);
      const price = range(min, oldprice);
      watches.push(new Watch(
        rand(this.women),
        rand(this.brands),
        rand(this.refs), oldprice, price
      ));
    }

    return watches;
  }

  getRandomPopularWatches(): Watch[][] {
    const watches = [
      ...this.getRandomMenWatches(),
      ...this.getRandomWomenWatches(),
    ];

    return shuffle(watches)
      .slice(0, 12)
      .reduce((wrap, cur, i) => {
        const index = Math.floor(i % 4);
        if (!wrap[index]) wrap[index] = [];
        wrap[index].push(cur);
        return wrap;
      }, []);
  }

  fetch(type?: string, quantity?: number): Watch[] | Watch[][] {
    switch (type) {
      case 'men':
        return this.getRandomMenWatches(quantity);
      case 'women':
        return this.getRandomWomenWatches(quantity);
      case 'popular':
        return this.getRandomPopularWatches();
      case 'all':
      default:
        const qty = quantity ? Math.floor(quantity / 2) : null;
        return shuffle([
          ...this.getRandomMenWatches(qty || 20),
          ...this.getRandomWomenWatches(qty ? qty + Math.floor(quantity % 2) : null || 20),
        ]);
    }
  }

}
