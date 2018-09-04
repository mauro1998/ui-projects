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
var rxjs_1 = require("rxjs");
var common_1 = require("@angular/common");
var CatalogFiltersComponent = /** @class */ (function () {
    function CatalogFiltersComponent(_currency) {
        this._currency = _currency;
        this.filters = [];
        this.range$ = new rxjs_1.BehaviorSubject('');
    }
    CatalogFiltersComponent.prototype.ngOnInit = function () {
        this.filters = [
            {
                title: 'Filtrar por género',
                items: [
                    'Mujer',
                    'Hombre',
                ]
            },
            {
                title: 'Filtrar por estilo',
                items: [
                    'Deportivo',
                    'Casual',
                    'Militar',
                    'Lujoso'
                ]
            },
            {
                title: 'Filtrar por Dial',
                items: [
                    'Análogo',
                    'Análogo - Digital',
                    'Digital'
                ]
            },
            {
                title: 'Filtrar por marca',
                items: [
                    'Tommy Hilfiger',
                    'Guess',
                    'G-Shock',
                    'Citizen',
                    'Movado',
                    'Hugo Boss',
                    'Fossil-Q',
                    'Rotary'
                ]
            }
        ];
    };
    CatalogFiltersComponent.prototype.onRangeChange = function (range) {
        var _this = this;
        var priceRange = range.map(function (price) {
            return _this._currency.transform(price, 'COP', 'symbol-narrow', '1.0-2');
        });
        this.range$.next(priceRange.join(' - '));
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CatalogFiltersComponent.prototype, "filters", void 0);
    CatalogFiltersComponent = __decorate([
        core_1.Component({
            selector: 'lux-catalog-filters',
            templateUrl: './catalog-filters.component.html',
            styleUrls: ['./catalog-filters.component.scss'],
            providers: [common_1.CurrencyPipe]
        }),
        __metadata("design:paramtypes", [common_1.CurrencyPipe])
    ], CatalogFiltersComponent);
    return CatalogFiltersComponent;
}());
exports.CatalogFiltersComponent = CatalogFiltersComponent;
//# sourceMappingURL=catalog-filters.component.js.map