import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'lux-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() items = 0;
  @Input() itemsOnPage = 16;
  @Input() active = 1;

  @Output() onPageChange = new EventEmitter();

  private pages = [];
  private left = [];
  private center = [];
  private right = [];

  constructor() { }

  ngOnInit() {
    const nPages = Math.ceil(this.items / this.itemsOnPage);
    for (let i = 0; i < nPages; i++) this.pages.push(i + 1);
    this.onPageChange.emit(this.active);
    this.updatePages();
  }

  ngOnChanges() {
    this.updatePages();
  }

  updatePages() {
    const max = 3;

    if (this.pages.length < max + 3) {
      this.left = [...this.pages];
    } else {
      if (this.active <= max) {
        this.left = this.pages.slice(0, max);
        this.center.length = 0;
        this.right = [this.pages[this.pages.length - 1]];
      } else if (this.active > this.pages.length - max) {
        this.left = [this.pages[0]];
        this.center.length = 0;
        this.right = this.pages.slice(this.pages.length - max);
      } else {
        this.left = [this.pages[0]];
        this.center = [this.active];
        this.right = [this.pages[this.pages.length - 1]];
      }
    }
  }

  changePage(page) {
    if (this.active === page) return;
    this.active = page;
    this.onPageChange.emit(this.active);
    this.updatePages();
  }

  get disableNext() {
    return this.pages.indexOf(this.active) === (this.pages.length - 1);
  }

  get disablePrev() {
    return this.pages.indexOf(this.active) === 0;
  }
}
