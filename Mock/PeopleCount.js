let inp = [{ fname: "abc", address: "India" },
{ fname: "def", address: "Europe" },
{ fname: "rst", address: "India" },
{ fname: "xyz", address: "Europe" },
{ fname: "mno", address: "Russia" }]

console.log(inp.filter(value => value.address == "India").length + " people are living in India")