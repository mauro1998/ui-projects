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
var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
        this.opacity = 0.5;
        this.location = 'center';
    }
    HeroComponent.prototype.getCSSClasses = function () {
        var str = this.location.toUpperCase().trim();
        if (!str)
            return;
        if (str === 'CENTER' || str === 'CENTER CENTER')
            return 'centered';
        var css = '';
        var location = str.split(' ');
        var x = location[0];
        var y = location[1];
        switch (x) {
            case 'LEFT':
                css += ' ';
                break;
            case 'RIGHT':
                css += 'x-side--right ';
                break;
            case 'CENTER':
            default:
                css += 'x-side--center ';
                break;
        }
        switch (y) {
            case 'TOP':
                css += 'y-side--top ';
                break;
            case 'CENTER':
            default:
                css += 'y-side--center ';
                break;
        }
        return css;
    };
    HeroComponent.prototype.getImageSrc = function () {
        var src = "linear-gradient(rgba(0, 0, 0, " + this.opacity + "), rgba(0, 0, 0, " + this.opacity + ")), url(" + this.src + ")";
        return { backgroundImage: src };
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HeroComponent.prototype, "src", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], HeroComponent.prototype, "opacity", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HeroComponent.prototype, "location", void 0);
    HeroComponent = __decorate([
        core_1.Component({
            selector: 'lux-hero',
            templateUrl: './hero.component.html',
            styleUrls: ['./hero.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], HeroComponent);
    return HeroComponent;
}());
exports.HeroComponent = HeroComponent;
//# sourceMappingURL=hero.component.js.map