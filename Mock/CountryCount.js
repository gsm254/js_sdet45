let inp = [{ fname: "abc", address: "India" },
{ fname: "def", address: "Europe" },
{ fname: "rst", address: "India" },
{ fname: "xyz", address: "Europe" },
{ fname: "mno", address: "Russia" }]
let count = [];
// for (const obj in inp) {

//     if (Object.hasOwnProperty.call(inp, obj)) {
//         if(inp[obj].address=="India"){
//             ind++
//         } 
//         else if(inp[obj].address=="Europe"){
//             eu++
//         } 
//         else if(inp[obj].address=="Russia"){
//             ru++
//         }   
//     }
// }
// console.log(`India ---> ${ind}`);
// console.log(`Europe ---> ${eu}`);
// console.log(`Russia ---> ${ru}`);

inp.map(value => {
    if (!(count.includes(value.address)))
        count.push(value.address)

})



console.log("Total number of countries " + count.length);
