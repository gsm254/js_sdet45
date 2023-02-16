
document.getElementById("add").onclick= calci

document.getElementById("sub").onclick = sub
document.getElementById("mul").onclick = mul
document.getElementById("div").onclick = div

function calci(callBackFn){
    let x = Number(document.getElementById("v1").value);
    let y = Number(document.getElementById("v2").value);
//     console.log(typeof(x))
//    console.log(y)
   callBackFn(x,y)  
   
}

function add(x,y) {
    // let x = Number(document.getElementById("v1").value);
    // let y = Number(document.getElementById("v2").value);
    
    document.getElementById("result").innerHTML=  x+y
    
}
function sub() {
    let x = Number(document.getElementById("v1").value);
    let y = Number(document.getElementById("v2").value);
    document.getElementById("result").innerHTML=  x-y
    
}
function div() {
    let x = Number(document.getElementById("v1").value);
    let y = Number(document.getElementById("v2").value);
    document.getElementById("result").innerHTML=  x/y
}
function mul() {
    let x = Number(document.getElementById("v1").value);
    let y = Number(document.getElementById("v2").value);
    document.getElementById("result").innerHTML=  x*y
    
}