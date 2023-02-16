//Event loop execution
console.log("start");
setTimeout(()=>{console.log("in 2 progress")},3000)
setTimeout(()=>{console.log("in 1 progress")},1000)
setTimeout(()=>{console.log("in 3 progress")},3000)
setInterval(()=>{console.log("in break progress")},2000)
console.log("end");