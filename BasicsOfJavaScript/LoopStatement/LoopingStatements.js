//for loop
let orgList = ["LT","EY","TYSS"]//array can be heterogenous
//why? when we know how many times loop should run
for (let i = 0; i < orgList.length; i++) {
    console.log(orgList[i]);
    
}

//while
//why? when we want loop to run until the condition fails not on number of times
//even numbers
let n = 10 //ineration value is dynamic and at the during execution time only will get to know that how many time loop should run
while (n!=0) {
    if(n%2==0){
        console.log("even number " + n);
    }
    n--;
}

//foreach
orgList.forEach(element => {
    console.log(element);
});

//do while loop
//loop will execute atleast once even the condition fails
let e = 1;
do {
    console.log("hello")
} while (e>10);