let str = "I am an employee of TestYantra"

let nstr = str.split(" ").map(value => value.split("").reverse().join("")).join(" ")
console.log(nstr);