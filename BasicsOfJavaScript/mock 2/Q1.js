let str = 'javascript'

for (let i = 0; i < str.length; i++) {
    let count = 0;
    if ('aeiou'.includes(str[i])){
        for (let j = 0; j < str.length; j++) {
            if (str[i] == str[j]){
                if (j < i) {
                    break;
                }
                count++;
            }
        }

    }

    if (count >= 1) {
        console.log(str[i] + '---->' + count)
    }

}