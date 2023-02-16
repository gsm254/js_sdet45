const arr = [3,4,6,8,7,5]
const ev=[]
const od=[]
for (const iterator of arr) {
    if(iterator%2==0)
    ev.push(iterator)
    else
    od.push(iterator)
}
console.log(od);
console.log(ev);
