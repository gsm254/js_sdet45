let ar = [1,2,3,5,,9]


// forin donot print undefined value
// for (const key in ar) {
//     if (Object.hasOwnProperty.call(ar, key)) {
//         const element = ar[key];
//         console.log(element);
        
//     }
// }

//forof prints all the values includes undefined
// for (const iterator of ar) {
//     console.log(iterator);
// }

//foreach will skip the undefined value
ar.forEach((index,value)=>{console.log(value)});
