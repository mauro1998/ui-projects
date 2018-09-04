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
var animations_1 = require("@angular/animations");
var Subject_1 = require("rxjs/Subject");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var interval_1 = require("rxjs/observable/interval");
require("rxjs/add/operator/combineLatest");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/throttleTime");
require("rxjs/add/operator/delay");
var SLIDE = {
    NAME: 'slide',
    UP: 'up',
    DOWN: 'down',
};
var defaults = {
    autoplay: false,
    autoplayInterval: 5000,
    easing: 'ease',
    duration: 1000
};
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.items = [];
        this.options = {};
        this.theme = '';
        this.items$ = new Subject_1.Subject();
        this.index$ = new Subject_1.Subject();
        this.switch$ = new Subject_1.Subject();
        this.state$ = new BehaviorSubject_1.BehaviorSubject(SLIDE.DOWN);
        this.index = 0;
    }
    CarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = Object.assign({}, defaults, this.options);
        this.percent$ = this.items$.combineLatest(this.index$
            .throttleTime(this.options.duration)
            .distinctUntilChanged()).delay(0).map(function (_a) {
            var items = _a[0], index = _a[1];
            _this.index = index;
            return -(index * (100 * items.length) / items.length);
        });
    };
    CarouselComponent.prototype.ngAfterViewInit = function () {
        var items = this.templateRefs.map(function (el) { return el.nativeElement; });
        this.items$.next(items);
        this.autoPlay();
    };
    CarouselComponent.prototype.showCustom = function (index) {
        this.index$.next(index);
        this.switch$.next(true);
    };
    CarouselComponent.prototype.showPrevious = function () {
        this.showCustom(this.index - 1);
    };
    CarouselComponent.prototype.showNext = function () {
        this.showCustom(this.index + 1);
    };
    CarouselComponent.prototype.autoPlay = function () {
        var _this = this;
        if (!this.options.autoplay)
            return;
        var timeInterval = this.options.duration + this.options.autoplayInterval;
        this.switch$.switchMap(function () { return interval_1.interval(timeInterval); })
            .map(function () { return (_this.index + 1) % _this.items.length; })
            .subscribe(function (index) { return _this.index$.next(index); });
        this.switch$.next(true);
    };
    CarouselComponent.prototype.changeButtonState = function (state) {
        this.state$.next(state);
    };
    Object.defineProperty(CarouselComponent.prototype, "isFirstItem", {
        get: function () {
            return this.index === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isLastItem", {
        get: function () {
            return this.index === (this.items.length - 1);
        },
        enumerable: true,
        configurable: true
    });
    CarouselComponent.prototype.getTheme = function () {
        switch (this.theme) {
            case 'light':
                return 'btn--white';
            case 'gold':
                return 'btn--gold';
            case 'blue':
            default:
                return '';
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", core_1.TemplateRef)
    ], CarouselComponent.prototype, "template", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "theme", void 0);
    __decorate([
        core_1.ViewChildren('templateItems'),
        __metadata("design:type", core_1.QueryList)
    ], CarouselComponent.prototype, "templateRefs", void 0);
    CarouselComponent = __decorate([
        core_1.Component({
            selector: 'lux-carousel',
            templateUrl: './carousel.component.html',
            styleUrls: ['./carousel.component.scss'],
            animations: [
                animations_1.trigger(SLIDE.NAME, [
                    animations_1.state(SLIDE.UP, animations_1.style({ bottom: '0', opacity: 1 })),
                    animations_1.state(SLIDE.DOWN, animations_1.style({ bottom: '-110%', opacity: 0 })),
                    animations_1.transition(SLIDE.DOWN + " <=> " + SLIDE.UP, [
                        animations_1.animate('.3s ease')
                    ]),
                ])
            ]
        })
    ], CarouselComponent);
    return CarouselComponent;
}());
exports.CarouselComponent = CarouselComponent;
//# sourceMappingURL=carousel.component.js.map