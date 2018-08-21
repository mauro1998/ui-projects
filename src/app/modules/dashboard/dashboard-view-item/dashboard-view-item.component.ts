import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dashboard-view-item',
  templateUrl: './dashboard-view-item.component.html',
  styleUrls: ['./dashboard-view-item.component.scss']
})
export class DashboardViewItemComponent implements OnInit {
  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
