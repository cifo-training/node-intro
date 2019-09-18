class SortedList {
   
    constructor() {
        this.items = new Array();
        this.length =0;
    }

    add(item) {
        this.items.push(item);
        this.length++;
        return this.items.sort((a, b) => a -b); 
    }
    get(pos) {
        return this.items[pos-1];
    }
    max() {
        return this.items[this.items.length-1];
        //return Math.max.apply(Math, this.items);
    }
    min() {
        return this.items[0];
        //return Math.min.apply(Math, this.items);
    }
    average() {
        return  this.items.reduce((a,b) => a + b, 0) / this.items.length;
    }
    sum() {
       return this.items.reduce((a,b)=> a+b, 0);
    }
}


module.exports = SortedList;
