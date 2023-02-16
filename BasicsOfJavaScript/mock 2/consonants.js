let str = "javascript"

for (let i = 0; i < str.length; i++) {
    let count = 0
    if (!(str[i] == 'a' || str[i] == 'i' || str[i] == 'e' || str[i] == 'o' || str[i] == 'u')) {
        for (let j = 0; j < str.length; j++) {
            if (str[i] == str[j]) {
                if (j < i) {
                    break;
                }
                count++
            }
        }
    }
    if (count >= 1)
        console.log(str[i] + "---->" + count)
}
