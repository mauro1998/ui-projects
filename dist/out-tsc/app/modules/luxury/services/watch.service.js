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
var utils_1 = require("./utils");
var watch_class_1 = require("./watch.class");
var WatchService = /** @class */ (function () {
    function WatchService() {
        this.men = [];
        this.women = [];
        this.maxMen = 11;
        this.maxWomen = 16;
        this.stock = 1000;
        for (var i = 1; i <= this.maxMen; i++) {
            this.men.push("assets/images/luxury/watches/men/" + i + ".jpg");
        }
        for (var i = 1; i <= this.maxWomen; i++) {
            this.women.push("assets/images/luxury/watches/women/" + i + ".jpg");
        }
        this.brands = [
            'MOVADO SE',
            'TISSOT V8',
            'OMEGA',
            'TISSOT PR100',
        ];
        this.refs = [
            'Pilot Black Dial Stainless Steel Chronograph',
            'Automatic Silver Dial',
            'Seamaster Planet Ocean 600M Automatic Chronometer',
            'Black Dial Black Leather Watch T1014511605100',
        ];
        this.desc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam labore molestias sit. Non, cum. Tenetur nesciunt excepturi, fugiat, omnis assumenda tempore non iure placeat blanditiis harum iste dolores aspernatur animi?';
        this.menWatches = [];
        for (var i = 0; i < this.stock / 2; i++) {
            var min = 100000;
            var oldprice = utils_1.rand(utils_1.shuffle([true, false])) ? null : utils_1.range(min, 1000000);
            var price = utils_1.range(min, oldprice);
            var src = utils_1.rand(this.men);
            var thumbnails = [];
            for (var i_1 = 0; i_1 < utils_1.range(2, 8); i_1++) {
                thumbnails.push(src);
            }
            this.menWatches.push(new watch_class_1.default(i + "-" + Date.now().toString(16), src, utils_1.rand(this.brands), utils_1.rand(this.refs), this.desc, oldprice, price, thumbnails));
        }
        this.womenWatches = [];
        for (var i = 0; i < this.stock / 2; i++) {
            var min = 100000;
            var oldprice = utils_1.rand(utils_1.shuffle([true, false])) ? null : utils_1.range(min, 1000000);
            var price = utils_1.range(min, oldprice);
            var src = utils_1.rand(this.women);
            var thumbnails = [];
            for (var i_2 = 0; i_2 < utils_1.range(2, 8); i_2++) {
                thumbnails.push(src);
            }
            this.womenWatches.push(new watch_class_1.default(i + "-" + Date.now().toString(16), src, utils_1.rand(this.brands), utils_1.rand(this.refs), this.desc, oldprice, price, thumbnails));
        }
    }
    WatchService.prototype.getRandomMenWatches = function (quantity) {
        if (quantity === void 0) { quantity = 8; }
        return utils_1.shuffle(this.menWatches).slice(0, quantity);
    };
    WatchService.prototype.getRandomWomenWatches = function (quantity) {
        if (quantity === void 0) { quantity = 8; }
        return utils_1.shuffle(this.menWatches).slice(0, quantity);
    };
    WatchService.prototype.getRandomPopularWatches = function () {
        var watches = this.getRandomMenWatches().concat(this.getRandomWomenWatches());
        return utils_1.shuffle(watches)
            .slice(0, 12)
            .reduce(function (wrap, cur, i) {
                var index = Math.floor(i % 4);
                if (!wrap[index])
                    wrap[index] = [];
                wrap[index].push(cur);
                return wrap;
            }, []);
    };
    WatchService.prototype.fetch = function (type, quantity) {
        switch (type) {
            case 'men':
                return this.getRandomMenWatches(quantity);
            case 'women':
                return this.getRandomWomenWatches(quantity);
            case 'popular':
                return this.getRandomPopularWatches();
            case 'all':
            default:
                var qty = quantity ? Math.floor(quantity / 2) : null;
                return utils_1.shuffle(this.getRandomMenWatches(qty || 20).concat(this.getRandomWomenWatches(qty ? qty + Math.floor(quantity % 2) : null || 20)));
        }
    };
    WatchService.prototype.fetchById = function (id) {
        return this.menWatches.concat(this.womenWatches).find(function (watch) { return watch.id === id; });
    };
    WatchService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], WatchService);
    return WatchService;
}());
exports.WatchService = WatchService;
//# sourceMappingURL=watch.service.js.map
