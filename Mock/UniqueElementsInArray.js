const arr = [1, 1, 2, 3, 4, 5, 5]

for (let i = 0; i < arr.length; i++) {
    count = 0
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            if (j < i)
                break;
            count++
        }

    }
    if (count == 1)
        console.log(arr[i]);
        

}