import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { getDate } from './services/utils';
import { MenuService } from './services/menu.service';
import { FooterService } from './services/footer.service';
import { TestimonialsService } from './services/testimonials.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'luxury',
  templateUrl: './luxury.component.html',
  styleUrls: ['./luxury.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    MenuService,
    FooterService,
    TestimonialsService
  ],
})
export class LuxuryComponent implements OnInit {
  menu: any[][];
  footerInfo: any[];
  testimonials: any[];
  menuHidden$ = new BehaviorSubject<boolean>(true);
  modalHidden$ = new BehaviorSubject<boolean>(true);

  constructor(
    private _menu: MenuService,
    private _footer: FooterService,
    private _testimonials: TestimonialsService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.menu = this._menu.fetch();
    this.testimonials = this._testimonials.fetch();
    this.footerInfo = this._footer.fetch();

    this._router.events.subscribe((ev: any) => {
      if (ev instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  log(...args) {
    console.log(...args);
  }

  getDate() {
    return getDate();
  }
}
