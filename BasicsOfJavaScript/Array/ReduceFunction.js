const numbers = [45, 4, 9, 16, 25];
numbers.forEach
let sum = numbers.reduce(myFunction);
console.log(sum)
function myFunction(total, value, index, array) {
    console.log(total);
    //console.log(value);
    return total + value;
} 