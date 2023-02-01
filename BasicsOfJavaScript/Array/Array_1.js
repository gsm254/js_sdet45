var arr = new Array("lead1","lead2","lead3");
console.log(arr.length);

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);


for (const iterator of arr) {
    console.log(iterator);
}

//=================================================
//this type of array declaration not preferable 
var ar = new Array(3)//it will create empty array of size 3 bcause it read it has size of an array
console.log(ar.length);
console.log(ar);

var ar = new Array("js")//consider it has a value
console.log(ar.length);
console.log(ar);

