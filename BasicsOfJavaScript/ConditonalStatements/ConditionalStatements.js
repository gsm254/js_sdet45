/*
conditonal statements
if, else if, else blocks
switch statement
ternary condition
*/

//ifelse
let reqScore = 256;
let score = 255;
if(score>=reqScore){
    console.log("won");
}
else{
    console.log("lost");
}

//if, else if, else blocks statements
let a=18;
if(a>18){
    console.log("eligible to vote");
}
else if(a==18){
    console.log("eligible to vote");
}
else{
    console.log("not eligible to vote");
}

//switch conditional statement
let clss = 4

switch (clss) {
    case 1:
        console.log("you are in 1st standard");
        break;
    case 2:
        console.log("you are in 2nd standard");
        break;
    case 3:
        console.log("you are in 3rd standard");
        break;
    case 4:
        console.log("you are in 4th standard");
        break;
    case 5:
        console.log("you are in 5th standard");
        break;

    default:
        console.log("not found");
        break;
}

//ternery conditional statement
let b = 2>1?2:1;
console.log(b);