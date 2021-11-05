

const MySet = require('../solution/index')

// тесты
describe("MySet ow eah", () => {
    it("хранит только уникальные значения", () => {
        const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

        // хранит только уникальные значения
        for (const iterator of [4, 8, 15, 16, 23, 42]) {
            expect([...set]).toContain(iterator)

        }
    })

    it("есть свойство size", () => {
        const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

        // хранит только уникальные значения
        // есть свойство size
        console.log(set.object);
        expect(set.size).toBe(6)
    })

    it("работает в цикле for-of", () => {
        const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

        // работает в цикле for-of
        for (const item of set) {
            expect(item).toBeTruthy() // 4 8 15 16 23 42
        }
    })
    it("есть методы keys, values, entries", () => {
        const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

        // есть методы keys, values, entries
        for (const item of set.entries()) {
            console.log(item); // [ 4, 4 ] [ 8, 8 ] ...
        }
    })
    it("есть метод clear", () => {
        const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

        // есть метод clear
        set.clear();
        console.log(set.size); // 0
    })
    it("есть метод add", () => {
        const set = new MySet([4, 8, 15, 15, 16, 23, 42]);
        preset(set)

    })
    it("который может работать в цепочке вызовов", () => {
        const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

        const [object, data] = preset(set)



        // который может работать в цепочке вызовов
        set.add(object).add(object).add(object);
    })
    it("есть метод delete", () => {
        const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

        const [object, data] = preset(set)

        // есть метод delete
        set.delete(data);
    })
    it("есть метод has", () => {
        const set = new MySet([4, 8, 15, 15, 16, 23, 42]);
        const [object, data] = preset(set)

        // есть метод has
        console.log(set.has({})); // false
        console.log(set.has(object)); // true
        console.log(set.has(data)); // false
    })
    it("и кое-что еще", () => {
        const set = new MySet([4, 8, 15, 15, 16, 23, 42]);
        const [object, data] = preset(set)
        // и кое-что еще
        expect(set === set.valueOf()).toBe(true) // true
        expect(String(set)).toBe('[object Set]') // [object ^_^]
        expect(Object.prototype.toString.call(set)).toBe('[object Set]') // [object ^_^]

    })
    it("и кое-что еще", () => {
        const set = new MySet();
        const [object, data] = preset(set)
        set.delete(data)
        // и кое-что еще
        // есть forEach, который делает какие-то странные вещи...
        set.forEach(function (item) {
            console.log(item.getValue.call(this)); // 42
        }, data)

    })
})





function preset(set) {
    const object = {
        getValue() { return this.value }
    }

    const data = {
        value: 42
    }

    // есть метод add
    set.add(object);
    set.add(data);
    return [object, data]
}






