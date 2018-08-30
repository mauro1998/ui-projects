import {
  Component, OnInit, ViewChild, ElementRef,
  AfterViewInit, AfterViewChecked
} from '@angular/core';
import { WatchService } from '../../services/watch.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { merge } from 'rxjs/observable/merge';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/combineLatest';
import Watch from '../../services/watch.class';

@Component({
  selector: 'lux-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('productContainer') productContainer: ElementRef;
  @ViewChild('gridItem') gridItem: ElementRef;

  private checker$ = new Subject();
  private grid$: Observable<string>;
  private watches: Watch[];

  private limit;
  private watchesOnPage: Watch[] = [];
  private itemsOnPage = 18;
  private activePage = 1;

  constructor(
    private _watch: WatchService,
  ) { }

  ngOnInit() {
    this.watches = <Watch[]>this._watch.fetch('all', 300);

    const resize$ = merge(
      this.checker$.delay(0),
      Observable.fromEvent(window, 'resize')
    ).filter(() => !!this.container && !!this.item)

    const containerWidth$ = resize$
      .map(() => this.container.offsetWidth)
      .distinctUntilChanged();

    const itemMinWidth$ = resize$
      .map(() => parseFloat(window.getComputedStyle(this.item).minWidth))
      .distinctUntilChanged();

    const css = {
      1: '',
      2: 'two-up',
      3: 'three-up',
      4: 'four-up',
      5: 'five-up',
      6: 'six-up',
    };

    this.grid$ = containerWidth$.combineLatest(itemMinWidth$)
      .map(([width, min]) => css[Math.floor(width / min)])
      .distinctUntilChanged();
  }

  ngAfterViewInit() {
    this.checker$.next();
  }

  ngAfterViewChecked() {
    this.checker$.next();
  }

  onPageChange(active) {
    this.activePage = active;
    const index = (this.activePage - 1) * this.itemsOnPage;
    this.limit = index + this.itemsOnPage;
    this.watchesOnPage = this.watches.slice(index, this.limit);
    window.scrollTo(0, 0);
  }

  get itemsOnPageMessage() {
    const items = this.limit - (this.itemsOnPage - this.watchesOnPage.length);
    return `${items} de ${this.watches.length}`;
  }

  log(...args) {
    console.log(...args);
  }

  get container(): HTMLElement {
    return this.productContainer
      && this.productContainer.nativeElement;
  }

  get item(): HTMLElement {
    const gridItem: HTMLElement = this.gridItem
      && this.gridItem.nativeElement;
    if (!gridItem) return null;
    return <HTMLElement>gridItem.querySelector('.preview__container');
  }

}
