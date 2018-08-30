import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { WatchService } from '../../services/watch.service';
import Watch from '../../services/watch.class';

@Component({
  selector: 'lux-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  private watches: Watch[];
  private watch: Watch;

  constructor(
    private _route: ActivatedRoute,
    private _watches: WatchService,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.watch = this._watches.fetchById(params.id);
      this.watches = <Watch[]>this._watches.fetch('all', 8);

      if (!this.watch) {
        this.watch = this.watches[0];
      }
    });
  }

}
