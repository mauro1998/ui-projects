import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';
import { interval } from 'rxjs/observable/interval';
import 'rxjs/add/operator/map';

@Component({
  selector: 'lux-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('slide', [
      state('active', style({ left: '0%' })),
      state('inactive', style({ left: '100%' })),
      transition('active => inactive', [
        animate('1s ease', style({ left: '-100%' }))
      ]),
      transition('inactive => active', [
        animate('1s ease')
      ]),
    ])
  ]
})
export class CarouselComponent implements OnInit {
  @Input() height = '20em';
  @Input() items = [];
  @Input() interval = 0;
  @Input() template: TemplateRef<any>;
  private states = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.items.length; i++) {
      this.states.push(i === 0 ? 'active' : 'inactive');
    }

    this.setInterval();
  }

  setInterval() {
    if (!this.interval) return;
    interval(this.interval)
      .map((n) => Math.floor((n + 1) % this.states.length))
      .subscribe((index) => {
        const i = index === 0 ? this.states.length - 1 : index - 1;
        this.states[i] = 'inactive';
        this.states[index] = 'active';
      });
  }

}
