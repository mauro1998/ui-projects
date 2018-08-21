import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dashboard-carrousel-item',
  templateUrl: './dashboard-carrousel-item.component.html',
  styleUrls: ['./dashboard-carrousel-item.component.scss']
})
export class DashboardCarrouselItemComponent implements OnInit {
  @Input() item: any;
  @Input() large: boolean;

  constructor() { }

  ngOnInit() {
  }

}
