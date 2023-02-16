function Org(name,id,address,obj,arr){
    //this.variable because if we want to use these values in again in that particular instance 
    this.name = name;
    this.id = id;
    this.address = address;
    this.obj=obj;
    this.arr = arr;
}

let ar = [1,2,3];

//we can create multiple instance with diiferent data
let orgTyss = new Org("tyss","1008","bengaluru")
let orgLt= new Org("lt","100","bengaluru",orgTyss,ar)

console.log(orgTyss);
console.log(orgLt);

console.log(orgTyss.name+"\t"+orgTyss.id+"\t"+orgTyss.address);
console.log(orgLt.name+"\t"+orgLt.id+"\t"+orgLt.address+"\t"+orgLt.obj.name+"\t"+orgLt.arr);
