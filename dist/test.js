"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
// тесты
describe("MySet ow eah", function () {
    it("хранит только уникальные значения", function () {
        var set = new index_1.default([4, 8, 15, 15, 16, 23, 42]);
        // хранит только уникальные значения
        for (var _i = 0, _a = [4, 8, 15, 16, 23, 42]; _i < _a.length; _i++) {
            var iterator = _a[_i];
            expect(__spreadArray([], set, true)).toContain(iterator);
        }
    });
    it("есть свойство size", function () {
        var set = new index_1.default([4, 8, 15, 15, 16, 23, 42]);
        // хранит только уникальные значения
        // есть свойство size
        expect(set.size).toBe(6);
    });
    it("работает в цикле for-of", function () {
        var set = new index_1.default([4, 8, 15, 15, 16, 23, 42]);
        // работает в цикле for-of
        for (var _i = 0, set_1 = set; _i < set_1.length; _i++) {
            var item = set_1[_i];
            expect(item).toBeTruthy(); // 4 8 15 16 23 42
        }
    });
    it("есть методы keys, values, entries", function () {
        var set = new index_1.default([4, 8, 15, 15, 16, 23, 42]);
        // есть методы keys, values, entries
        for (var _i = 0, _a = set.entries(); _i < _a.length; _i++) {
            var item = _a[_i];
            console.log(item); // [ 4, 4 ] [ 8, 8 ] ...
        }
    });
    it("есть метод clear", function () {
        var set = new index_1.default([4, 8, 15, 15, 16, 23, 42]);
        // есть метод clear
        set.clear();
        console.log(set.size); // 0
    });
    it("есть метод add", function () {
        var set = new index_1.default([4, 8, 15, 15, 16, 23, 42]);
        preset(set);
    });
    it("который может работать в цепочке вызовов", function () {
        var set = new index_1.default([4, 8, 15, 15, 16, 23, 42]);
        var _a = preset(set), object = _a[0], data = _a[1];
        // который может работать в цепочке вызовов
        set.add(object).add(object).add(object);
    });
    it("есть метод delete", function () {
        var set = new index_1.default([4, 8, 15, 15, 16, 23, 42]);
        var _a = preset(set), object = _a[0], data = _a[1];
        // есть метод delete
        set.delete(data);
    });
    it("есть метод has", function () {
        var set = new index_1.default([4, 8, 15, 15, 16, 23, 42]);
        var _a = preset(set), object = _a[0], data = _a[1];
        // есть метод has
        console.log(set.has({})); // false
        console.log(set.has(object)); // true
        console.log(set.has(data)); // false
    });
    it("и кое-что еще", function () {
        var set = new index_1.default([4, 8, 15, 15, 16, 23, 42]);
        var _a = preset(set), object = _a[0], data = _a[1];
        // и кое-что еще
        console.log(set === set.valueOf()); // true
        console.log(String(set)); // [object ^_^]
        console.log(Object.prototype.toString.call(set)); // [object ^_^]
    });
    it("и кое-что еще", function () {
        var set = new index_1.default([4, 8, 15, 15, 16, 23, 42]);
        var _a = preset(set), object = _a[0], data = _a[1];
        // и кое-что еще
        // есть forEach, который делает какие-то странные вещи...
        set.forEach(function (item) {
            console.log(item.getValue.call(this)); // 42
        }, data);
    });
});
function preset(set) {
    var object = {
        getValue: function () { return this.value; }
    };
    var data = {
        value: 42
    };
    // есть метод add
    set.add(object);
    set.add(data);
    return [object, data];
}
//# sourceMappingURL=test.js.map