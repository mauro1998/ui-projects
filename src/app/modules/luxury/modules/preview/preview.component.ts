import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Watch from '../../services/watch.class';
import { Router } from '@angular/router';

@Component({
  selector: 'lux-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  @Input() item: Watch;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {

  }

  showDetails() {
    this._router.navigate(['product', this.item.id]);
  }

  toggleInWishList(e) {
    e.stopPropagation();
    this.item.toggleInWishList();
  }

  toggleInCart(e) {
    e.stopPropagation();
    this.item.toggleInCart();
  }
}
