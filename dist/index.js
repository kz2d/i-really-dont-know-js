"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MySet = /** @class */ (function () {
    function MySet(array) {
        if (array === void 0) { array = []; }
        this.object = [];
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var i = array_1[_i];
            this.add(i);
        }
    }
    MySet.prototype.has = function (item) {
        return item in this.object;
    };
    MySet.prototype.add = function (item) {
        if (!this.has(item))
            this.object.push(item);
        return this;
    };
    MySet.prototype.delete = function (item) {
        this.object = this.object.filter(function (a) { return a !== item; });
    };
    MySet.prototype.clear = function () {
        this.object = [];
    };
    Object.defineProperty(MySet.prototype, "size", {
        get: function () {
            return this.object.length;
        },
        enumerable: false,
        configurable: true
    });
    MySet.prototype[Symbol.iterator] = function () {
        var index = -1;
        var data = this.object;
        return {
            next: function () { return ({ value: data[++index], done: !(index in data) }); }
        };
    };
    ;
    return MySet;
}());
exports.default = MySet;
var set = new MySet([1, 2, 3]);
console.log.apply(console, set);
//# sourceMappingURL=index.js.map