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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/operator/map");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/startWith");
require("rxjs/add/operator/share");
var SiteNavComponent = /** @class */ (function () {
    function SiteNavComponent() {
        this.scroll$ = Observable_1.Observable.fromEvent(window, 'scroll');
    }
    SiteNavComponent.prototype.ngOnInit = function () {
        var top = this.stickyElem.nativeElement.offsetTop;
        this.sticky$ = this.scroll$
            .map(function () { return window.pageYOffset; })
            .startWith(window.pageYOffset)
            .map(function (y) { return y > top; })
            .distinctUntilChanged()
            .share();
    };
    __decorate([
        core_1.ViewChild('sticky', { read: core_1.ElementRef }),
        __metadata("design:type", core_1.ElementRef)
    ], SiteNavComponent.prototype, "stickyElem", void 0);
    SiteNavComponent = __decorate([
        core_1.Component({
            selector: 'lux-site-nav',
            templateUrl: './site-nav.component.html',
            styleUrls: ['./site-nav.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [])
    ], SiteNavComponent);
    return SiteNavComponent;
}());
exports.SiteNavComponent = SiteNavComponent;
//# sourceMappingURL=site-nav.component.js.map