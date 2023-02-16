let str = "i am an testyantra employee"

arr= str.split(" ")

let sp=arr.map(value=>
        value.split("")[0].toUpperCase()+value.slice(1)
        ).join(" ")
    
console.log(sp);