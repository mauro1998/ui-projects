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
  private desc: string;
  private menWatches: Watch[];
  private womenWatches: Watch[];
  private stock = 1000;

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

    this.desc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam labore molestias sit. Non, cum. Tenetur nesciunt excepturi, fugiat, omnis assumenda tempore non iure placeat blanditiis harum iste dolores aspernatur animi?';

    this.menWatches = [];

    for (let i = 0; i < this.stock / 2; i++) {
      const min = 100000;
      const oldprice = rand(shuffle([true, false])) ? null : range(min, 1000000);
      const price = range(min, oldprice);
      const src = rand(this.men);
      const thumbnails = [];

      for (let i = 0; i < range(2, 8); i++) {
        thumbnails.push(src);
      }

      this.menWatches.push(new Watch(
        `${i}-${Date.now().toString(16)}`,
        src,
        rand(this.brands),
        rand(this.refs),
        this.desc,
        oldprice,
        price,
        thumbnails
      ));
    }

    this.womenWatches = [];

    for (let i = 0; i < this.stock / 2; i++) {
      const min = 100000;
      const oldprice = rand(shuffle([true, false])) ? null : range(min, 1000000);
      const price = range(min, oldprice);
      const src = rand(this.women);
      const thumbnails = [];

      for (let i = 0; i < range(2, 8); i++) {
        thumbnails.push(src);
      }

      this.womenWatches.push(new Watch(
        `${i}-${Date.now().toString(16)}`,
        src,
        rand(this.brands),
        rand(this.refs),
        this.desc,
        oldprice,
        price,
        thumbnails
      ));
    }
  }

  getRandomMenWatches(quantity = 8): Watch[] {
    return shuffle(this.menWatches).slice(0, quantity);
  }

  getRandomWomenWatches(quantity = 8): Watch[] {
    return shuffle(this.menWatches).slice(0, quantity);
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

  fetchById(id): Watch {
    return [
      ...this.menWatches,
      ...this.womenWatches
    ].find((watch: Watch) => watch.id === id);
  }
}
