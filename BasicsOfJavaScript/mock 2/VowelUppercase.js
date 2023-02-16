let str = 'good morning welcome to javascript session'

let op = str.split(" ").map(value => {
    if ('aeiou'.includes(value.charAt(2)) && value.length>=3) {
        return value.split("")[0].toUpperCase() + value.slice(1)
    }
    else
        return value
}).join(" ")

console.log(op);

