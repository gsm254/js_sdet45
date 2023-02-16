//object1

let org1 = {
    orgName:"GM",
    orgNo:"AOI02",
    details:function (v1,v2){console.log(`${this.orgName} ${this.orgNo}`)
console.log(v1+v2);}
}
    
    //object2
    let org2 = {
    orgName:"GM Arena",
    orgNo:"BOI02"
    
    }
    

    org1.details();

    //function borrowing
    org1.details.call(org2,"v","v2");
    
    org1.details.apply(org2,["v1","v2"]);//here we have to pass argument array
    
    let org2Info = org1.details.bind(org2)
    org2Info("v1","v2")