import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'lux-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SiteFooterComponent implements OnInit {
  @Input() sections: any[];

  constructor() { }

  ngOnInit() {
  }

}
