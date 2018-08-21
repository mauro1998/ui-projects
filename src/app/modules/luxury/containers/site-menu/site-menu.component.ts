import { Component, ViewEncapsulation, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'lux-site-menu',
  templateUrl: './site-menu.component.html',
  styleUrls: ['./site-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SiteMenuComponent {
  @Input() menu: any[][];
  @Input('hidden') hidden$ = new BehaviorSubject(true);

  constructor() { }

}
