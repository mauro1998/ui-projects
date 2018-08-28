import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';

import 'rxjs/Rx';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
  selector: 'lux-input-range',
  templateUrl: './input-range.component.html',
  styleUrls: ['./input-range.component.scss']
})
export class InputRangeComponent implements OnInit {
  @Input() from = 0;
  @Input() to = 100;
  @Output('onRangeChange') range = new EventEmitter<number[]>();

  @ViewChild('range') rangeRef: ElementRef;
  @ViewChild('from') fromRef: ElementRef;
  @ViewChild('to') toRef: ElementRef;

  left$: Observable<number>;
  right$: Observable<number>;
  down$ = new Subject();

  constructor() { }

  ngOnInit() {
    const percent$ = this.down$.switchMap((data: any) => {
      return fromEvent(window, 'mousemove')
        .takeUntil(fromEvent(window, 'mouseup'))
        .map((e: MouseEvent) => ({ data, x: e.clientX }));
    }).map(({ data, x }): [number, HTMLElement] => {
      const percent = Math.floor((x - data.left) * 100 / data.width);
      if (percent < 0) return [0, data.target];
      else if (percent > 100) return [100, data.target];
      else return [percent, data.target];
    }).distinctUntilChanged((a, b) => {
      return a.every((elem, i) => b[i] === elem);
    });

    const left$ = percent$.filter(([_, node]) => node === this.fromRef.nativeElement)
      .map(([percent]) => percent)
      .startWith(0);

    const right$ = percent$.filter(([_, node]) => node === this.toRef.nativeElement)
      .map(([percent]) => percent)
      .startWith(100);

    this.left$ = left$.withLatestFrom(right$)
      .delay(0)
      .map(([percent, right]) => {
        const val = percent < right ? percent : right;
        this.range.emit(this.getRange(val, right));
        return val;
      });

    this.right$ = right$.withLatestFrom(left$)
      .delay(0)
      .map(([percent, left]) => {
        const val = percent > left ? percent : left;
        this.range.emit(this.getRange(left, val));
        return val;
      });
  }

  getRange(from: number, to: number): number[] {
    const total = this.to - this.from;
    return [
      this.from + (from * total / 100),
      this.from + (to * total / 100),
    ];
  }

  onMouseDown(e) {
    const parent = e.target.parentElement;
    const left = parent.parentElement.getBoundingClientRect().left;
    const width = this.rangeRef.nativeElement.clientWidth;
    this.down$.next({ left, width, target: parent });
  }

}
