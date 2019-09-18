class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(x) {
    this.items.push(x);
    this.items.sort();
    this.length++;
  }

  get(pos) {
    let posicion = 0;

    if (pos <= 0 || pos > this.length) {
      posicion = 0;
    } else {
      posicion = this.items[pos - 1];
    }

    return posicion;
  }

  max() {
    return this.items[this.items.length - 1];
  }
  min() {
    return this.items[0];
  }
  average() {
    let suma = 0;

    if (this.items.length == 0) {
      suma = 0;
    } else {
      suma =
        this.items.reduce(function(a, b) {
          return a + b;
        }) / this.length;
    }

    return suma;
  }

  sum() {
    let suma = 0;

    if (this.items.length == 0) {
      suma = 0;
    } else {
      suma = this.items.reduce(function(a, b) {
        return a + b;
      });
    }

    return suma;
  }
}

var lista = new SortedList();

lista.add(2);
lista.add(4);
lista.add(3);
lista.add(5);

var posicion = lista.get(5);
var maximo = lista.max();
var minimo = lista.min();
var media = lista.average();

console.log(lista.length);
console.log(posicion);
console.log(maximo);
console.log(minimo);
console.log(media);

console.log(lista);

module.exports = SortedList;
