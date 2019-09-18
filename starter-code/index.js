class SortedList {

    // PROPERTIES
    items;
    length;

    constructor() {
        this.items = [];
        this.length = 0;
    }

    add(item) {
        for (let i = 0; i < this.length; i++) {
            if (item < this.items[i]) {
                this.items.splice(i, 0, item);
                this.length++;
                return;
            }
        }
        this.items.push(item);
        this.length++;
    }

    get(pos) {;
        if (pos > this.length || pos < 1) {
            throw new Error('OutOfBounds');
        }
        return this.items[pos - 1];
    }
    
    max() {
        if (this.length == 0) {
            throw new Error('EmptySortedList');
        }
        return this.items[this.length - 1];
    }
    
    min() {
        if (this.length == 0) {
            throw new Error('EmptySortedList');
        }
        return this.items[0];
    }
    
    average() {
        if (this.length == 0) {
            throw new Error('EmptySortedList');
        }
        return this.sum() / this.length;
    }
    
    sum() {
        if (this.length == 0) {
            throw new Error('EmptySortedList');
        }
        return this.items.reduce((n1, n2) => { 
            return n1 + n2;
        }, 0);
    }
}

module.exports = SortedList;
