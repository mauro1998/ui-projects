import { Component, OnInit, Input, TemplateRef, ViewChildren, AfterViewInit, QueryList, ElementRef } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';
import 'rxjs/Rx';
import { Subject, BehaviorSubject, Observable } from 'rxjs/Rx';

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

  @ViewChildren('templateItems') templateRefs: QueryList<ElementRef>;

  private items$ = new Subject<HTMLElement[]>();
  private index$ = new Subject<number>();
  private state$ = new BehaviorSubject(SLIDE.DOWN);

  amount$: Observable<number>;
  index: number = 0;

  ngOnInit() {
    this.options = Object.assign({}, defaults, this.options);
    this.amount$ = this.items$.combineLatest(
      this.index$
        .throttleTime(this.options.duration)
        .pairwise()
        .distinctUntilChanged()
    ).scan((amount, [items, [lastIndex, index]]) => {
      this.index = index;
      return amount + (items[index].offsetWidth * (lastIndex - index));
    }, 0);
  }

  ngAfterViewInit() {
    const items = this.templateRefs.map(el => el.nativeElement);
    this.items$.next(items);
    this.index$.next(this.index);
    this.autoPlay();
  }

  showPrevious() {
    this.index$.next(this.index - 1);
  }

  showNext() {
    this.index$.next(this.index + 1);
  }

  autoPlay() {
    if (!this.options.autoplay) return;
    const interval = this.options.duration + this.options.autoplayInterval;
    Observable.interval(interval)
      .map((n) => Math.floor((n + 1) % this.items.length))
      .subscribe((index) => this.index$.next(index));
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
}
