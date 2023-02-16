var arr1 = [2,2,1,5,3,4]
var arr2 = [56,2,2,3,48]

console.log(arr1);
console.log(arr2);

// var arr3=arr1.concat(arr2) // concat the two array returns reuslt array
// //console.log(arr1.join("/"));// two convert array to string with seperator parameter else default , (seperator)
// //arr1.push(1,2) // add the new element to array at the end and returns new length of an array


// arr1.length //gives length of an array
// arr1.unshift(1,2) // to add elements in start of an array retruns length

arr1.pop()//remove last element and return value
console.log(arr1);
// //
// //arr1.forEach(index)=>{ 
// //consloe.log(index)
// //}
// var a=arr1.copyWithin(1,0,1);
// //console.log(a);

for (const iterator of arr1.entries())//gives key value pair iterable object 
{
    console.log(iterator);
}

// function he(arr1) {
//     return arr1>3
// }
// console.log(arr1.find(he))////gives first element which satisfy the condition

// // //console.log(arr1.sort((a,b)=>b-a));//sort array a-b ascending .. b-a

// for (const iterator of arr1.values())//we iterable key of values in array
//  {
//      console.log(iterator);
//  }
// arr1.values

// console.log(arr1.findIndex(he))//give the index of first element which satisfy the condition

// console.log(arr1.every(he))//check whether all elements safisfy the condition result(true or false)
// console.log(arr1.includes(2));//check whether element present in array
// console.log(arr1.toLocaleString());//string representation of array 
// console.log(arr1.splice(1,2));//remove elements and we can insert new element in same position
// console.log(arr1.slice(1,2));//fetch elements start to end index

// console.log(arr1.indexOf(1,2));//gives index of first occurence of (num,index) num start from index
// console.log(arr1.lastIndexOf(5,3));//gives index of last occurence of (num,index) num start from index
// console.log(arr1.filter(he));//gives elements which satisfy the condition

// console.log(arr1.flatMap(value=>value>20));//
// console.log(arr1.map(value=>value>20));//returns true or false array base on the condition


