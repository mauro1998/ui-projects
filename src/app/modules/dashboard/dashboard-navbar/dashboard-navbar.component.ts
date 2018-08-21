import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent implements OnInit {
  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}
