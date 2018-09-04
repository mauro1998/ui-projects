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
var DashboardNavbarComponent = /** @class */ (function () {
    function DashboardNavbarComponent() {
    }
    DashboardNavbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DashboardNavbarComponent.prototype, "url", void 0);
    DashboardNavbarComponent = __decorate([
        core_1.Component({
            selector: 'dashboard-navbar',
            templateUrl: './dashboard-navbar.component.html',
            styleUrls: ['./dashboard-navbar.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], DashboardNavbarComponent);
    return DashboardNavbarComponent;
}());
exports.DashboardNavbarComponent = DashboardNavbarComponent;
//# sourceMappingURL=dashboard-navbar.component.js.map