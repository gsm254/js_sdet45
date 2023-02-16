function multipleOf5_10(num) {

    if(num % 5 == 0 && num % 10== 0) {
        console.log(num + "is multiple of 5 and 10");
    }
    else if(num%5==0)
    console.log(num +" is multiple of 5");
}

multipleOf5_10(25)