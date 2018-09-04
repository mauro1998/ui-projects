"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [a[j], a[i]], a[i] = _a[0], a[j] = _a[1];
    }
    return a;
    var _a;
}
exports.shuffle = shuffle;
function range(a, b) {
    if (!b)
        return range(0, a);
    return a + Math.floor(Math.random() * (b - a));
}
exports.range = range;
function rand() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!args.length)
        return Math.random();
    if (args.length === 1 && Array.isArray(args[0])) {
        return rand.apply(null, args[0]);
    }
    return args[range(args.length)];
}
exports.rand = rand;
function getDate() {
    var date = new Date();
    var months = [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic',
    ];
    return months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
}
exports.getDate = getDate;
//# sourceMappingURL=utils.js.map