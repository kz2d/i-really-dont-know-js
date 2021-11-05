class MySet {
    object = []
    constructor(array = []) {
        for (const i of array) {
            this.add(i)
        }
    }
    has(item) {
        return this.object.filter((a) => a === item).length > 0
    }

    add(item) {
        if (!this.has(item))
            this.object.push(item)
        return this
    }
    delete(item) {
        this.object = this.object.filter((a) => a !== item)
    }

    clear() {
        this.object = []
    }
    get size() {
        return this.object.length
    }

    entries() {
        let tmp = []
        for (const i of this.object) {
            tmp.push([i, i])
        }
        return tmp.values()
    }
    forEach(cb, data) {
        let that = data || this
        for (const i of this.object) {
            cb.call(that, i)
        }
    }
    [Symbol.iterator]() {
        var index = -1;
        var object = this.object;

        return {
            next: () => ({ value: object[++index], done: !(index in object) })
        };
    };
    // [Symbol.toStringTag] = 'Set'
}


module.exports = MySet;


// тесты
const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

// хранит только уникальные значения
console.log([...set]); // [ 4, 8, 15, 16, 23, 42 ]

// есть свойство size
console.log(set.size); // 6

// работает в цикле for-of
for (const item of set) {
    console.log(item); // 4 8 15 16 23 42
}

// есть методы keys, values, entries
for (const item of set.entries()) {
    console.log(item); // [ 4, 4 ] [ 8, 8 ] ...
}
// есть метод clear
set.clear();
console.log(set.size); // 0

const object = {
    getValue() { return this.value }
}

const data = {
    value: 42
}

// есть метод add
set.add(object);
set.add(data);

// который может работать в цепочке вызовов
set.add(object).add(object).add(object);

// есть метод delete
set.delete(data);

// есть метод has
console.log(set.has({})); // false
console.log(set.has(object)); // true
console.log(set.has(data)); // false

// и кое-что еще
console.log(set === set.valueOf()) // true
console.log(String(set)) // [object ^_^]
console.log(Object.prototype.toString.call(set)) // [object ^_^]

// есть forEach, который делает какие-то странные вещи...
set.forEach(function (item) {
    console.log(item.getValue.call(this)); // 42
}, data)