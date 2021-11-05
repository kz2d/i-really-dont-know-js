module.exports = class MySet {
    object = []
    constructor(array = []) {
        for (const i of array) {
            this.add(i)
        }
    }
    has(item) {
        return this.object.includes(item)

    }

    add(item) {
        if (!this.has(item))
            this.object.push(item)
        return this
    }
    delete(item) {
        this.object.filter((a) => a !== item)
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
        this.object.forEach(cb, data)
        // let that = data || this
        // for (const i of this.object) {
        //     cb.call(that, i)
        // }
    }
    [Symbol.iterator]() {
        var index = -1;
        var object = this.object;

        return {
            next: () => ({ value: object[++index], done: !(index in object) })
        };
    };
    get [Symbol.toStringTag]() { return '^_^' }

}

