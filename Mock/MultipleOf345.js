for (let index = 1; index <= 100; index++) {
    if(index%3 == 0 && index%5 == 0){
        console.log(`${index} is mutiple of both 3 & 5`);
    }
    else if(index%3 == 0){
        console.log(`${index} is mutiple of 3`);
    }
    else if(index%5 == 0){
        console.log(`${index} is mutiple of 5`);
    }  
}