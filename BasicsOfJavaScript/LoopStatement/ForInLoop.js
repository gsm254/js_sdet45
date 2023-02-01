let arr = ["LT", "TechMahi","Tata","Wipro"]

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
let ar = {it01:"LT", it02:"TechMahi", it03:"Tata", it04:"Wipro"};

//console.log(ar.length);
//when we want to fetch data based on key then we go for "forin" loop
//we can fetch particular value based on key
var a = 0;
for (const key in ar) {
    if (Object.hasOwnProperty.call(ar, key)) {
        a++;
        const element = ar[key];
        if(key=="it04"){
        console.log(element);
        console.log(key);
        }
        
    }
}
console.log(a);