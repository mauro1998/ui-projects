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
var BrandService = /** @class */ (function () {
    function BrandService() {
        this.brands = [];
        this.brands = [
            { src: 'assets/images/luxury/brands/accurist.jpg' },
            { src: 'assets/images/luxury/brands/armani.jpg' },
            { src: 'assets/images/luxury/brands/axss.jpg' },
            { src: 'assets/images/luxury/brands/boss.png' },
            { src: 'assets/images/luxury/brands/casio.jpg' },
            { src: 'assets/images/luxury/brands/citizen.jpg' },
            { src: 'assets/images/luxury/brands/fossil-q.png' },
            { src: 'assets/images/luxury/brands/fossil.jpg' },
            { src: 'assets/images/luxury/brands/gshock.png' },
            { src: 'assets/images/luxury/brands/guess.png' },
            { src: 'assets/images/luxury/brands/kors.jpg' },
            { src: 'assets/images/luxury/brands/movado.jpg' },
            { src: 'assets/images/luxury/brands/nixon.png' },
            { src: 'assets/images/luxury/brands/ob.jpg' },
            { src: 'assets/images/luxury/brands/rebecca-minkoff.png' },
            { src: 'assets/images/luxury/brands/rotary.jpg' },
            { src: 'assets/images/luxury/brands/tissot.jpg' },
            { src: 'assets/images/luxury/brands/tommy.jpg' },
        ];
    }
    BrandService.prototype.fetch = function () {
        return utils_1.shuffle(this.brands);
    };
    BrandService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], BrandService);
    return BrandService;
}());
exports.BrandService = BrandService;
//# sourceMappingURL=brand.service.js.map