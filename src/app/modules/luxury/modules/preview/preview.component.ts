import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Watch from '../../services/watch.class';

@Component({
  selector: 'lux-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  @Input() item: Watch;
  @Output() onShowDetails = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  showDetails() {
    this.onShowDetails.emit();
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
