class SortedList {
    constructor(){
        this.items = [];
        this.length = 0;
    }

    add(item) {        
        this.items.push(item);
        this.items.sort();          
    }

    get(pos) {
        return this.items[pos-1];
    }
    max() {
        return this.items[this.items.length-1]
    }
    min() {
        return this.items[0]
    }
    average() {        
        let sum = this.items.reduce((total, amount) => total + amount);
        let average = sum / this.items.length;
        return average;
    }
    sum() {
        let sum = this.items.reduce((total, amount) => total + amount);
        return sum;
    }
}

module.exports = SortedList;

// SortedList = new SortedList();
// SortedList.add(8);
// SortedList.add(3);
SortedList.add(6);


// console.log(SortedList.items);
// console.log(SortedList.get(3));
// console.log(SortedList.max());
// console.log(SortedList.average())
// console.log(SortedList.get(1))
// console.log(SortedList.items.length)