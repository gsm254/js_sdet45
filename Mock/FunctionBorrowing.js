let org1 = {
    name:"TYSS",
    address:"Bengalru",
    details:function (a1){
       console.log(`${this.name} ${this.address}`);
       console.log(a1);
    }
}
let org2 = {
    name:"LT",
    address:"Mysuru"
}

let b=org1.details.bind(org2,1);