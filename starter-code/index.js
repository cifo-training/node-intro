class SortedList {   

    constructor (){
    this.items = [];
    this.length = 0;
    }    
    
    add(item) {
        this.items.push(item);
        this.items.sort((a,b)=>a-b);
        this.length = this.items.length;
    }    
    
    get(pos) {
        pos = pos-1;
        return this.items[pos];
    }    

    max() {
        let mayor=this.items[0];
        for(let i=0; i<(this.items.length); i++){
            if (this.items[i]>mayor){
                mayor=this.items[i];
            }
        }
        return mayor;
    }    
    
    min() {
    let menor=this.items[0];
    for(let i=0; i<(this.items.length); i++){
        if (this.items[i]<menor){
            menor=this.items[i];
        }
    }
    return menor;
    }    

    average() {
        let media=0;
        let contador=0;
        for(let i=0; i<(this.items.length); i++){
            contador+=this.items[i]
        }
    media=contador/this.items.length;
    return media;
    }    

    sum() {
    let total=0;
    for(let i=0; i<(this.items.length); i++){
        total+=this.items[i]
    }
    return total;
    }
}

module.exports = SortedList;
SortedList = new SortedList();