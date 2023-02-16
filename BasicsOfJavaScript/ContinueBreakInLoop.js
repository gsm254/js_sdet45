arr=[1,2,3.1,5,6,7]

//continue => skip current loop
// for (let index = 0; index < arr.length; index++) {
//     if(arr[index]==3.1)
//     continue;
//     console.log(arr[index]);
    
// }

//break => comeout of the loop
for (let index = 0; index < arr.length; index++) {
    if(arr[index]==3.1)
    break;
    console.log(arr[index]);
    
}