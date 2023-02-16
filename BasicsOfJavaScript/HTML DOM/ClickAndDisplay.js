document.getElementById("btn").onclick=click;

function click() {
    document.getElementById("btn").innerHTML="clicked"
    
}

document.getElementById("date").onclick = display;

function display(){
    
    document.getElementById("time").innerHTML= new Date();
}