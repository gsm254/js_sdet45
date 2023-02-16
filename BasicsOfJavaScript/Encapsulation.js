"use strict";
class Organization {


    // #d and d are two different variables
    #d = 40;
    d = 15
    #e = 30;
    sum(a, b, c, d = 10, e = 0) {
        return a + b + c + d + e;
    }

    get getd() {
        return this.#d;
    }
    get gete() {
        return this.e;
    }
    /**
     * @param {any} value
     */
    set sd(value) {
        this.#d = value
    }
    /**
     * @param {any} value
     */
    // set sete(value){
    //     this.#e = value 
    // }

}
let obj = new Organization();
console.log(obj.sum(1, 2, 3, 4))
console.log(obj.getd);
obj.sd = 11;
console.log(obj.getd);
//obj.sete(12)
//console.log(obj.gete);