<<<<<<< HEAD


class SortedList {
constructor(){
    this.length = 0;
    this.items = [];
}
add(item) {
     
    //for(let i=1; i<=30; i++){
   this.items.push(item);
   
   this.length++;
    }

    get(pos) {
        return this.items[pos];
    }
    max() {
        let valorMax = this.items [0];//primero de todos
       
        for ( let item of this.items  ){
            valorMax = ( valorMax > item ? valorMax : item); //if max == max if not item
        }
        return valorMax;
    }
    min() {
        let valorMin = this.items [0];//primero de todos
       
        for ( let item of this.items  ){
            valorMin = ( valorMin < item ? valorMin : item); //if max == max if not item
        } 
        return valorMin;
    }
    average() {
        let total = this.sum();
        total = total / parseFloat(this.length);
        return total;
    }
    sum() {
        let suma = 0;
        for ( let item of this.items  ){

            suma = suma+item;
        }
        return suma;

    }
}
/*let sl = new SortedList();
for(let i= 0; i<101; i++){
    sl.add(i*2);
  }
console.log(sl.average());*/
=======
class SortedList {
    constructor() {
        this.length = 0;
        this.items = [];
    }
    add(item) {
        let item = []; 
        for(let i=1; i<=30; i++){
        item.push(i);   
        }
    }
    get(pos) {}
    max() {}
    min() {}
    average() {}
    sum() {}
}
 
>>>>>>> 7a7d05930dc6fbc3f3e475ab0e40c4eb52612ce1
module.exports = SortedList;
