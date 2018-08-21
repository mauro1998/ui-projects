import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/share';

@Component({
  selector: 'lux-site-nav',
  templateUrl: './site-nav.component.html',
  styleUrls: ['./site-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SiteNavComponent implements OnInit {
  @ViewChild('sticky', { read: ElementRef }) stickyElem: ElementRef;
  scroll$ = Observable.fromEvent(window, 'scroll');
  sticky$: Observable<boolean>;

  constructor() { }

  ngOnInit() {
    const top = this.stickyElem.nativeElement.offsetTop;
    this.sticky$ = this.scroll$
      .map(() => window.pageYOffset)
      .startWith(window.pageYOffset)
      .map(y => y > top)
      .distinctUntilChanged()
      .share();
  }

}
