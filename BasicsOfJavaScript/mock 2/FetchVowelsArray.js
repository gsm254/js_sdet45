let str = 'javascript'
const vow = []
for (const char of str.split('')) {
    
    if('aeiou'.includes(char))
    vow.push(char)
    
}

console.log(vow);
