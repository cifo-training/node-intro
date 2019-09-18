
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

    get(pos) {
        
    return this.items[pos-1];

    }


    max() {
        
        return this.items[this.items.length -1];
        

    }
    min() {}
    average() {}
    sum() {}
}


var lista = new SortedList();


 lista.add(4);
 lista.add(5);
 lista.add(1);
 lista.add(6);

var posicion = lista.get(1);
var maximo = lista.max();

console.log(lista.length);
console.log(posicion);
console.log(maximo);

console.log(lista);


module.exports = SortedList;



