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
var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.type = 'info';
        this.fluid = false;
        this.boldText = '';
        this.text = '';
    }
    AlertComponent.prototype.getCSSClasses = function () {
        return _a = {},
            _a["alert--" + this.type] = true,
            _a['alert--fluid'] = !!this.fluid,
            _a;
        var _a;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AlertComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AlertComponent.prototype, "fluid", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AlertComponent.prototype, "boldText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AlertComponent.prototype, "text", void 0);
    AlertComponent = __decorate([
        core_1.Component({
            selector: 'lux-alert',
            templateUrl: './alert.component.html',
            styleUrls: ['./alert.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());
exports.AlertComponent = AlertComponent;
//# sourceMappingURL=alert.component.js.map