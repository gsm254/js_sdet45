const arr = [0,1,0,0,1,1,1]
let c_0=0;
let c_1=0;
for (const iterator of arr) {
    if(iterator==0)
    c_0++;
    else if(iterator==1)
    c_1++;
}
console.log(`count of number 0 is ${c_0} and 1 is ${c_1}`);