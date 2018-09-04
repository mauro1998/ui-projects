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
var brand_service_1 = require("../../services/brand.service");
var banner_service_1 = require("../../services/banner.service");
var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(_watches, _brand, _banner) {
        this._watches = _watches;
        this._brand = _brand;
        this._banner = _banner;
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        this.menPreviews = this._watches.fetch('men');
        this.womenPreviews = this._watches.fetch('women');
        this.populars = this._watches.fetch('popular');
        this.thumbnails = this._brand.fetch().slice(0, 8);
        this.banners = this._banner.fetch();
    };
    LandingPageComponent.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, args);
    };
    LandingPageComponent = __decorate([
        core_1.Component({
            selector: 'lux-landing-page',
            templateUrl: './landing-page.component.html',
            styleUrls: ['./landing-page.component.scss'],
            providers: [
                watch_service_1.WatchService,
                brand_service_1.BrandService,
                banner_service_1.BannerService,
            ]
        }),
        __metadata("design:paramtypes", [watch_service_1.WatchService,
            brand_service_1.BrandService,
            banner_service_1.BannerService])
    ], LandingPageComponent);
    return LandingPageComponent;
}());
exports.LandingPageComponent = LandingPageComponent;
//# sourceMappingURL=landing-page.component.js.map