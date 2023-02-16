const arr = [2,11,66,44,23,97]

for (const i of arr) {
    let count=0;
    for (let j = 1; j <= i/2; j++) {
        if(i%j==0){
            count++;  
        }
    }
    if(count==1)
    console.log(i);   
}