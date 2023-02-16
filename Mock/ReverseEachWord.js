let str = "I am an employee of TestYantra"
let strs=str.split(" ")
let nstr =""
for (const iterator of strs) {
   nstr+=iterator.split("").reverse().join("")+" ";
}

console.log(nstr);