let f1 = 0
let f2 = 1
let f3;
console.log(f1);
console.log(f2);
for (let index = 0; index < 15; index++) {
    f3 = f1+f2
    f1=f2
    f2=f3
    console.log(f3);
    
}