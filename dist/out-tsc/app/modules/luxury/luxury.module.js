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
var routing_module_1 = require("./routing.module");
var animations_1 = require("@angular/platform-browser/animations");
var luxury_component_1 = require("./luxury.component");
var landing_page_component_1 = require("./sample/landing-page/landing-page.component");
var catalog_component_1 = require("./sample/catalog/catalog.component");
var containers_1 = require("./containers");
var layout_1 = require("./layout");
var modules_1 = require("./modules");
var catalog_filters_component_1 = require("./sample/catalog-filters/catalog-filters.component");
var not_found_component_1 = require("./sample/not-found/not-found.component");
var watch_service_1 = require("./services/watch.service");
var components = containers_1.default.concat(layout_1.default, modules_1.default, [
    luxury_component_1.LuxuryComponent,
    landing_page_component_1.LandingPageComponent,
    catalog_component_1.CatalogComponent,
    catalog_filters_component_1.CatalogFiltersComponent,
    not_found_component_1.NotFoundComponent,
]);
var LuxuryModule = /** @class */ (function () {
    function LuxuryModule() {
    }
    LuxuryModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                routing_module_1.RoutingModule,
                animations_1.BrowserAnimationsModule,
            ],
            providers: [
                watch_service_1.WatchService
            ],
            declarations: components,
            exports: components,
        })
    ], LuxuryModule);
    return LuxuryModule;
}());
exports.LuxuryModule = LuxuryModule;
//# sourceMappingURL=luxury.module.js.map