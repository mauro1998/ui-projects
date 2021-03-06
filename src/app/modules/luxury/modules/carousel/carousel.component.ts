import { Component, OnInit, Input, TemplateRef, ViewChildren, AfterViewInit, QueryList, ElementRef } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/delay';
import { delay } from 'rxjs/operators';

const SLIDE = {
  NAME: 'slide',
  UP: 'up',
  DOWN: 'down',
}

interface AnimationOptions {
  autoplay: boolean,
  autoplayInterval: number,
  easing: string,
  duration: number,
}

const defaults: AnimationOptions = {
  autoplay: false,
  autoplayInterval: 5000,
  easing: 'ease',
  duration: 1000
}

@Component({
  selector: 'lux-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger(SLIDE.NAME, [
      state(SLIDE.UP, style({ bottom: '0', opacity: 1 })),
      state(SLIDE.DOWN, style({ bottom: '-110%', opacity: 0 })),
      transition(`${SLIDE.DOWN} <=> ${SLIDE.UP}`, [
        animate('.3s ease')
      ]),
    ])
  ]
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() items = [];
  @Input() template: TemplateRef<any>;
  @Input() options: AnimationOptions = <AnimationOptions>{};
  @Input() theme = '';

  @ViewChildren('templateItems') templateRefs: QueryList<ElementRef>;

  private items$ = new Subject<HTMLElement[]>();
  private index$ = new Subject<number>();
  private switch$ = new Subject<boolean>();
  private state$ = new BehaviorSubject(SLIDE.DOWN);

  percent$: Observable<number>;
  index: number = 0;

  ngOnInit() {
    this.options = Object.assign({}, defaults, this.options);
    this.percent$ = this.items$.combineLatest(
      this.index$
        .throttleTime(this.options.duration)
        .distinctUntilChanged()
    ).map(([items, index]) => {
      this.index = index;
      return -(index * (100 * items.length) / items.length);
    });
  }

  ngAfterViewInit() {
    const items = this.templateRefs.map(el => el.nativeElement);
    this.items$.next(items);
    this.autoPlay();
  }

  showCustom(index) {
    this.index$.next(index);
    this.switch$.next(true);
  }

  showPrevious() {
    this.showCustom(this.index - 1);
  }

  showNext() {
    this.showCustom(this.index + 1);
  }

  autoPlay() {
    if (!this.options.autoplay) return;
    const timeInterval = this.options.duration + this.options.autoplayInterval;
    this.switch$.switchMap(() => interval(timeInterval))
      .map(() => (this.index + 1) % this.items.length)
      .subscribe((index) => this.index$.next(index));
    this.switch$.next(true);
  }

  changeButtonState(state) {
    this.state$.next(state);
  }

  get isFirstItem() {
    return this.index === 0;
  }

  get isLastItem() {
    return this.index === (this.items.length - 1);
  }

  getTheme() {
    switch (this.theme) {
      case 'light':
        return 'btn--white'
      case 'gold':
        return 'btn--gold'
      case 'blue':
      default:
        return ''
    }
  }
}
