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
var utils_1 = require("./utils");
var BannerService = /** @class */ (function () {
    function BannerService() {
        this.src = [];
        this.leadins = [];
        this.texts = [];
        for (var i = 1; i <= 5; i++) {
            this.src.push("assets/images/luxury/banners/" + i + ".jpg");
        }
        this.leadins = [
            'Cientos de diseños',
            'Las marcas más populares',
            'Las mejores promociones',
        ];
        this.texts = [
            'Explora nuestro gran catálogo de relojes.',
            'Cientos de diseños de las marcas más populares.',
            'Descubre el reloj perfecto para ti.',
            'Descubre las promociones más increíbles.',
            'Diseños exclusivos para hombres y mujeres.',
            'Te ofrecemos la posibilidad de vender tu reloj.',
            'Aprovecha nuestras promociones.',
        ];
    }
    BannerService.prototype.fetch = function () {
        var banners = [];
        for (var i = 0; i < 5; i++) {
            banners.push({
                src: this.src[i],
                leadin: utils_1.rand(this.leadins),
                opacity: 0.4,
                text: [utils_1.rand(this.texts), utils_1.rand(this.texts), utils_1.rand(this.texts)],
                action: 'Explorar',
                href: '/catalog',
            });
        }
        return banners;
    };
    BannerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], BannerService);
    return BannerService;
}());
exports.BannerService = BannerService;
//# sourceMappingURL=banner.service.js.map