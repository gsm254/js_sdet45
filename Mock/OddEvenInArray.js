const arr = [20,33,40,51,23,2]

for (const iterator of arr) {
    if(iterator%2==0){
        console.log(`${iterator} is even`);
    }
    else{
        console.log(`${iterator} is odd`);
    }
}