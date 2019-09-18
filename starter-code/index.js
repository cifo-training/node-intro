class SortedList {
    constructor(){
        this.items=[];
        this.length=0;
    }

    add(item) {
        this.items.push(parseInt(item));
        this.items.sort((a, b)=>{
            return a - b;
          });
        this.length=this.items.length;
    }
    get(pos) {
        return this.items[pos-1];
    }
    max() {
        return this.items[this.length-1];
    }
    min() {
        return this.items[0];
    }
    average() {
        try {
            return this.sum()/this.length;
        } catch (error) { }
        
    }
    sum() {
        if (this.length>0){
            return this.items.reduce((a,b)=>a+b);
        }
    }
}

module.exports = SortedList;
