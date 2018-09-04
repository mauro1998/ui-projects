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
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.items = 0;
        this.itemsOnPage = 16;
        this.active = 1;
        this.onPageChange = new core_1.EventEmitter();
        this.pages = [];
        this.left = [];
        this.center = [];
        this.right = [];
    }
    PaginationComponent.prototype.ngOnInit = function () {
        var nPages = Math.ceil(this.items / this.itemsOnPage);
        for (var i = 0; i < nPages; i++)
            this.pages.push(i + 1);
        this.onPageChange.emit(this.active);
        this.updatePages();
    };
    PaginationComponent.prototype.ngOnChanges = function () {
        this.updatePages();
    };
    PaginationComponent.prototype.updatePages = function () {
        var max = 3;
        if (this.pages.length < max + 3) {
            this.left = this.pages.slice();
        }
        else {
            if (this.active <= max) {
                this.left = this.pages.slice(0, max);
                this.center.length = 0;
                this.right = [this.pages[this.pages.length - 1]];
            }
            else if (this.active > this.pages.length - max) {
                this.left = [this.pages[0]];
                this.center.length = 0;
                this.right = this.pages.slice(this.pages.length - max);
            }
            else {
                this.left = [this.pages[0]];
                this.center = [this.active];
                this.right = [this.pages[this.pages.length - 1]];
            }
        }
    };
    PaginationComponent.prototype.changePage = function (page) {
        if (this.active === page)
            return;
        this.active = page;
        this.onPageChange.emit(this.active);
        this.updatePages();
    };
    Object.defineProperty(PaginationComponent.prototype, "disableNext", {
        get: function () {
            return this.pages.indexOf(this.active) === (this.pages.length - 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "disablePrev", {
        get: function () {
            return this.pages.indexOf(this.active) === 0;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "itemsOnPage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "active", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "onPageChange", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'lux-pagination',
            templateUrl: './pagination.component.html',
            styleUrls: ['./pagination.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map