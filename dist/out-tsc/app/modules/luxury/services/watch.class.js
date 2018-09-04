"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Watch = /** @class */ (function () {
    function Watch(id, src, brand, ref, description, oldprice, price, thumbnails, inWishList, inCart) {
        if (price === void 0) { price = 0; }
        if (inWishList === void 0) { inWishList = false; }
        if (inCart === void 0) { inCart = false; }
        this.id = id;
        this.src = src;
        this.brand = brand;
        this.ref = ref;
        this.description = description;
        this.oldprice = oldprice;
        this.price = price;
        this.thumbnails = thumbnails;
        this.inWishList = inWishList;
        this.inCart = inCart;
        if (oldprice) {
            var off = Math.floor((this.oldprice - this.price) * 100 / this.oldprice);
            this.discount = off + "% Descuento";
        }
    }
    Watch.prototype.toggleInWishList = function () {
        this.inWishList = !this.inWishList;
    };
    Watch.prototype.toggleInCart = function () {
        this.inCart = !this.inCart;
    };
    return Watch;
}());
exports.default = Watch;
//# sourceMappingURL=watch.class.js.map