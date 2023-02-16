const arr = [21,59,31,6]
let min = arr[0]

    
for(const value of arr){
    if(min>value){
      min=value
    }
}

console.log(min)