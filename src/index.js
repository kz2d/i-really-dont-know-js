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
        return tmp
    }
    forEach(cb, data) {
        let that = data || this
        for (const i of that) {
            cb(i)
        }
    }
    [Symbol.iterator]() {
        var index = -1;
        var object = this.object;

        return {
            next: () => ({ value: object[++index], done: !(index in object) })
        };
    };
}


module.exports = MySet;

// let set = new MySet([1, 2, 3, 3])
// console.log(set.entries());
// for (const i of set.entries()) {
//     console.log(i)

// }
