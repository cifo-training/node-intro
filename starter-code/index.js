class SortedList {

    constructor (){
        this.items = [];
        this.length = 0;
    }

    
    add(item) {
        //console.log(item);
        //console.log(item);
        //this.items.push(item);
        
        this.length = this.items.length;
        
        this.items[this.length] = item; 
        //this.items.push(item);
        this.items.sort();
        this.length++;
        
               
        //this.length += 1;
        
        //console.log(item);
    }
    get(pos) {
        //console.log(pos);
        pos = pos-1;
        //console.log(typeof(this.items[pos]));
        //console.log(pos);
        //console.log(this.items[pos]);
        return this.items[pos];
        
    }

    max() {
        //console.log("x:"+ this.max());
        return this.items.max();
        
    }
    min() {}
    average() {}
    sum() {}
}

module.exports = SortedList;

//SortedList = new SortedList();

/*SortedList.add(52);
console.log(SortedList.length);
console.log(SortedList.items);

SortedList.add(42);
console.log(SortedList.length);
console.log(SortedList.items);

SortedList.add(48);
console.log(SortedList.length);
console.log(SortedList.items);

SortedList.get(1);
console.log(SortedList.get(1));
SortedList.get(2);
console.log(SortedList.get(2));
SortedList.get(3);
console.log(SortedList.get(3));
*/