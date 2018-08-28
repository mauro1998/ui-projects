import { Component, OnInit } from '@angular/core';
import { WatchService } from '../../services/watch.service';
import { BrandService } from '../../services/brand.service';
import { BannerService } from '../../services/banner.service';

@Component({
  selector: 'lux-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers: [
    WatchService,
    BrandService,
    BannerService,
  ]
})
export class LandingPageComponent implements OnInit {
  thumbnails: any[];
  menPreviews: any[];
  womenPreviews: any[];
  populars: any[];
  banners: any[];

  constructor(
    private _watches: WatchService,
    private _brand: BrandService,
    private _banner: BannerService,
  ) { }

  ngOnInit() {
    this.menPreviews = this._watches.fetch('men');
    this.womenPreviews = this._watches.fetch('women');
    this.populars = this._watches.fetch('popular');
    this.thumbnails = this._brand.fetch().slice(0, 8);
    this.banners = this._banner.fetch();
  }

  log(...args) {
    console.log(...args);
  }

}
