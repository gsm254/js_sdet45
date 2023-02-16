//we can give default value like this
function invoice(name="vtiger") {
    this.name = name;
    return this.name;
}

console.log(invoice("MS"));