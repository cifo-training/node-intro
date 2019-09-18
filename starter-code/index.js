
class SortedList {


    constructor () {
       this.items = [];
       this.length = 0;
      }

    add(x) {
       this.items.push(x);
       this.items.sort();
       this.length++;

    }

    get(pos) {}
    max() {}
    min() {}
    average() {}
    sum() {}
}


var lista = new SortedList();


console.log(lista.length);

 lista.add(4);
 lista.add(5);
 lista.add(1);

 console.log(lista.length);


console.log(lista);


module.exports = SortedList;

