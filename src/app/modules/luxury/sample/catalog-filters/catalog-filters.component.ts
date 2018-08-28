import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'lux-catalog-filters',
  templateUrl: './catalog-filters.component.html',
  styleUrls: ['./catalog-filters.component.scss'],
  providers: [CurrencyPipe]
})
export class CatalogFiltersComponent implements OnInit {
  @Input() filters = [];
  range$ = new BehaviorSubject('');

  constructor(
    private _currency: CurrencyPipe
  ) { }

  ngOnInit() {
    this.filters = [
      {
        title: 'Filtrar por género',
        items: [
          'Mujer',
          'Hombre',
        ]
      },
      {
        title: 'Filtrar por estilo',
        items: [
          'Deportivo',
          'Casual',
          'Militar',
          'Lujoso'
        ]
      },
      {
        title: 'Filtrar por Dial',
        items: [
          'Análogo',
          'Análogo - Digital',
          'Digital'
        ]
      },
      {
        title: 'Filtrar por marca',
        items: [
          'Tommy Hilfiger',
          'Guess',
          'G-Shock',
          'Citizen',
          'Movado',
          'Hugo Boss',
          'Fossil-Q',
          'Rotary'
        ]
      }
    ];
  }

  onRangeChange(range: number[]) {
    const priceRange = range.map((price) => {
      return this._currency.transform(price, 'COP', 'symbol-narrow', '1.0-2');
    });

    this.range$.next(priceRange.join(' - '));
  }

}
