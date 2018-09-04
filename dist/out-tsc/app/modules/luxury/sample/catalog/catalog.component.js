"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var watch_service_1 = require("../../services/watch.service");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
var merge_1 = require("rxjs/observable/merge");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/map");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/combineLatest");
var CatalogComponent = /** @class */ (function () {
    function CatalogComponent(_watch) {
        this._watch = _watch;
        this.checker$ = new Subject_1.Subject();
        this.watchesOnPage = [];
        this.itemsOnPage = 18;
        this.activePage = 1;
    }
    CatalogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.watches = this._watch.fetch('all', 300);
        var resize$ = merge_1.merge(this.checker$.delay(0), Observable_1.Observable.fromEvent(window, 'resize')).filter(function () { return !!_this.container && !!_this.item; });
        var containerWidth$ = resize$
            .map(function () { return _this.container.offsetWidth; })
            .distinctUntilChanged();
        var itemMinWidth$ = resize$
            .map(function () { return parseFloat(window.getComputedStyle(_this.item).minWidth); })
            .distinctUntilChanged();
        var css = {
            1: '',
            2: 'two-up',
            3: 'three-up',
            4: 'four-up',
            5: 'five-up',
            6: 'six-up',
        };
        this.grid$ = containerWidth$.combineLatest(itemMinWidth$)
            .map(function (_a) {
            var width = _a[0], min = _a[1];
            return css[Math.floor(width / min)];
        })
            .distinctUntilChanged();
    };
    CatalogComponent.prototype.ngAfterViewInit = function () {
        this.checker$.next();
    };
    CatalogComponent.prototype.ngAfterViewChecked = function () {
        this.checker$.next();
    };
    CatalogComponent.prototype.onPageChange = function (active) {
        this.activePage = active;
        var index = (this.activePage - 1) * this.itemsOnPage;
        this.limit = index + this.itemsOnPage;
        this.watchesOnPage = this.watches.slice(index, this.limit);
        window.scrollTo(0, 0);
    };
    Object.defineProperty(CatalogComponent.prototype, "itemsOnPageMessage", {
        get: function () {
            var items = this.limit - (this.itemsOnPage - this.watchesOnPage.length);
            return items + " de " + this.watches.length;
        },
        enumerable: true,
        configurable: true
    });
    CatalogComponent.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, args);
    };
    Object.defineProperty(CatalogComponent.prototype, "container", {
        get: function () {
            return this.productContainer
                && this.productContainer.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CatalogComponent.prototype, "item", {
        get: function () {
            var gridItem = this.gridItem
                && this.gridItem.nativeElement;
            if (!gridItem)
                return null;
            return gridItem.querySelector('.preview__container');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ViewChild('productContainer'),
        __metadata("design:type", core_1.ElementRef)
    ], CatalogComponent.prototype, "productContainer", void 0);
    __decorate([
        core_1.ViewChild('gridItem'),
        __metadata("design:type", core_1.ElementRef)
    ], CatalogComponent.prototype, "gridItem", void 0);
    CatalogComponent = __decorate([
        core_1.Component({
            selector: 'lux-catalog',
            templateUrl: './catalog.component.html',
            styleUrls: ['./catalog.component.scss'],
        }),
        __metadata("design:paramtypes", [watch_service_1.WatchService])
    ], CatalogComponent);
    return CatalogComponent;
}());
exports.CatalogComponent = CatalogComponent;
//# sourceMappingURL=catalog.component.js.map