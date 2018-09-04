"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var dashboard_component_1 = require("./dashboard.component");
var dashboard_aside_component_1 = require("./dashboard-aside/dashboard-aside.component");
var dashboard_main_content_component_1 = require("./dashboard-main-content/dashboard-main-content.component");
var dashboard_carrousel_item_component_1 = require("./dashboard-carrousel-item/dashboard-carrousel-item.component");
var dashboard_container_component_1 = require("./dashboard-container/dashboard-container.component");
var dashboard_navbar_component_1 = require("./dashboard-navbar/dashboard-navbar.component");
var dashboard_view_item_component_1 = require("./dashboard-view-item/dashboard-view-item.component");
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                dashboard_component_1.DashboardComponent,
                dashboard_aside_component_1.DashboardAsideComponent,
                dashboard_main_content_component_1.DashboardMainContentComponent,
                dashboard_carrousel_item_component_1.DashboardCarrouselItemComponent,
                dashboard_container_component_1.DashboardContainerComponent,
                dashboard_navbar_component_1.DashboardNavbarComponent,
                dashboard_view_item_component_1.DashboardViewItemComponent
            ],
            exports: [
                dashboard_component_1.DashboardComponent,
                dashboard_aside_component_1.DashboardAsideComponent,
                dashboard_main_content_component_1.DashboardMainContentComponent,
                dashboard_carrousel_item_component_1.DashboardCarrouselItemComponent,
                dashboard_container_component_1.DashboardContainerComponent,
                dashboard_navbar_component_1.DashboardNavbarComponent,
                dashboard_view_item_component_1.DashboardViewItemComponent
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map