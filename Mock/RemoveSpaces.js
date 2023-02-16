let str = "I ma an employee of TestYantra"
let nstr = ""
for (const char of str) {
    if (!(char == " "))
        nstr = nstr + char

}
console.log(nstr);