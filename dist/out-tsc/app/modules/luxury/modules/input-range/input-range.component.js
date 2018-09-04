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
var fromEvent_1 = require("rxjs/observable/fromEvent");
require("rxjs/Rx");
var Rx_1 = require("rxjs/Rx");
var InputRangeComponent = /** @class */ (function () {
    function InputRangeComponent() {
        this.from = 0;
        this.to = 100;
        this.range = new core_1.EventEmitter();
        this.down$ = new Rx_1.Subject();
    }
    InputRangeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var percent$ = this.down$.switchMap(function (data) {
            return fromEvent_1.fromEvent(window, 'mousemove')
                .takeUntil(fromEvent_1.fromEvent(window, 'mouseup'))
                .map(function (e) { return ({ data: data, x: e.clientX }); });
        }).map(function (_a) {
            var data = _a.data, x = _a.x;
            var percent = Math.floor((x - data.left) * 100 / data.width);
            if (percent < 0)
                return [0, data.target];
            else if (percent > 100)
                return [100, data.target];
            else
                return [percent, data.target];
        }).distinctUntilChanged(function (a, b) {
            return a.every(function (elem, i) { return b[i] === elem; });
        });
        var left$ = percent$.filter(function (_a) {
            var _ = _a[0], node = _a[1];
            return node === _this.fromRef.nativeElement;
        })
            .map(function (_a) {
            var percent = _a[0];
            return percent;
        })
            .startWith(0);
        var right$ = percent$.filter(function (_a) {
            var _ = _a[0], node = _a[1];
            return node === _this.toRef.nativeElement;
        })
            .map(function (_a) {
            var percent = _a[0];
            return percent;
        })
            .startWith(100);
        this.left$ = left$.withLatestFrom(right$)
            .delay(0)
            .map(function (_a) {
            var percent = _a[0], right = _a[1];
            var val = percent < right ? percent : right;
            _this.range.emit(_this.getRange(val, right));
            return val;
        });
        this.right$ = right$.withLatestFrom(left$)
            .delay(0)
            .map(function (_a) {
            var percent = _a[0], left = _a[1];
            var val = percent > left ? percent : left;
            _this.range.emit(_this.getRange(left, val));
            return val;
        });
    };
    InputRangeComponent.prototype.getRange = function (from, to) {
        var total = this.to - this.from;
        return [
            this.from + (from * total / 100),
            this.from + (to * total / 100),
        ];
    };
    InputRangeComponent.prototype.onMouseDown = function (e) {
        var parent = e.target.parentElement;
        var left = parent.parentElement.getBoundingClientRect().left;
        var width = this.rangeRef.nativeElement.clientWidth;
        this.down$.next({ left: left, width: width, target: parent });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], InputRangeComponent.prototype, "from", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], InputRangeComponent.prototype, "to", void 0);
    __decorate([
        core_1.Output('onRangeChange'),
        __metadata("design:type", Object)
    ], InputRangeComponent.prototype, "range", void 0);
    __decorate([
        core_1.ViewChild('range'),
        __metadata("design:type", core_1.ElementRef)
    ], InputRangeComponent.prototype, "rangeRef", void 0);
    __decorate([
        core_1.ViewChild('from'),
        __metadata("design:type", core_1.ElementRef)
    ], InputRangeComponent.prototype, "fromRef", void 0);
    __decorate([
        core_1.ViewChild('to'),
        __metadata("design:type", core_1.ElementRef)
    ], InputRangeComponent.prototype, "toRef", void 0);
    InputRangeComponent = __decorate([
        core_1.Component({
            selector: 'lux-input-range',
            templateUrl: './input-range.component.html',
            styleUrls: ['./input-range.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], InputRangeComponent);
    return InputRangeComponent;
}());
exports.InputRangeComponent = InputRangeComponent;
//# sourceMappingURL=input-range.component.js.map