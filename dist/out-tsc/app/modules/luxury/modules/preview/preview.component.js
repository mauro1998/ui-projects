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
var watch_class_1 = require("../../services/watch.class");
var router_1 = require("@angular/router");
var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(_router) {
        this._router = _router;
    }
    PreviewComponent.prototype.ngOnInit = function () {
    };
    PreviewComponent.prototype.showDetails = function () {
        this._router.navigate(['product', this.item.id]);
    };
    PreviewComponent.prototype.toggleInWishList = function (e) {
        e.stopPropagation();
        this.item.toggleInWishList();
    };
    PreviewComponent.prototype.toggleInCart = function (e) {
        e.stopPropagation();
        this.item.toggleInCart();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", watch_class_1.default)
    ], PreviewComponent.prototype, "item", void 0);
    PreviewComponent = __decorate([
        core_1.Component({
            selector: 'lux-preview',
            templateUrl: './preview.component.html',
            styleUrls: ['./preview.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], PreviewComponent);
    return PreviewComponent;
}());
exports.PreviewComponent = PreviewComponent;
//# sourceMappingURL=preview.component.js.map