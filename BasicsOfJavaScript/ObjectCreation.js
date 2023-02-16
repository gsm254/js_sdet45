let Org = {
    name:"TYSS",
    address:"Bengaluru",
    details:function(){console.log(this.name)}
}

obj1 = Object.create(Org);
obj2 = Object.create(Org)

obj1.details=function() {
    console.log(this.address);
}

console.log(obj1.name);//TYSS
obj1.name="FireFlink"
console.log(obj1.name);//FireFlink
console.log(obj2.name);//TYSS

obj1.details()
obj2.details()
