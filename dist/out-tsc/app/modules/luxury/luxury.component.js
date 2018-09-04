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
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var utils_1 = require("./services/utils");
var menu_service_1 = require("./services/menu.service");
var footer_service_1 = require("./services/footer.service");
var testimonials_service_1 = require("./services/testimonials.service");
var router_1 = require("@angular/router");
var LuxuryComponent = /** @class */ (function () {
    function LuxuryComponent(_menu, _footer, _testimonials, _router) {
        this._menu = _menu;
        this._footer = _footer;
        this._testimonials = _testimonials;
        this._router = _router;
        this.menuHidden$ = new BehaviorSubject_1.BehaviorSubject(true);
        this.modalHidden$ = new BehaviorSubject_1.BehaviorSubject(true);
    }
    LuxuryComponent.prototype.ngOnInit = function () {
        this.menu = this._menu.fetch();
        this.testimonials = this._testimonials.fetch();
        this.footerInfo = this._footer.fetch();
        this._router.events.subscribe(function (ev) {
            if (ev instanceof router_1.NavigationEnd) {
                window.scrollTo(0, 0);
            }
        });
    };
    LuxuryComponent.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, args);
    };
    LuxuryComponent.prototype.getDate = function () {
        return utils_1.getDate();
    };
    LuxuryComponent = __decorate([
        core_1.Component({
            selector: 'luxury',
            templateUrl: './luxury.component.html',
            styleUrls: ['./luxury.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [
                menu_service_1.MenuService,
                footer_service_1.FooterService,
                testimonials_service_1.TestimonialsService
            ],
        }),
        __metadata("design:paramtypes", [menu_service_1.MenuService,
            footer_service_1.FooterService,
            testimonials_service_1.TestimonialsService,
            router_1.Router])
    ], LuxuryComponent);
    return LuxuryComponent;
}());
exports.LuxuryComponent = LuxuryComponent;
//# sourceMappingURL=luxury.component.js.map