function add(v1,v2) {
    console.log(v1+v2);
    
}
function diff(v1,v2) {
    console.log(v1-v2);
    
}
function multi(v1,v2) {
    console.log(v1*v2);
    
}

function calculator(v1,v2,callBackfn) {
    console.log("given values are "+v1+" "+v2);
    callBackfn(v1,v2)
}

calculator(5,6,multi)