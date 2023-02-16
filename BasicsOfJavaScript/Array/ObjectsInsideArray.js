let org = {
    orgname: "LT"
}
function contact(name) {
    this.name = name
}
let lead = {
    leadname: "Ramana"
}

let details = [org, lead, new Object()]

console.log(details[0].orgname);
console.log(details[1].leadname);
details[2].name = "anup"
console.log(details[2].name);