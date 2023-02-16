const arr = [20,33,40,51,23,2]
let sum=0;
for (const value of arr) {
    if(!(value%2==0)){
        sum+=value;
    }
}
console.log("Sum of odd numbers in the arra is "+sum);