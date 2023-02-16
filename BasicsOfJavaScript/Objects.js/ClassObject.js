class Leads{
    constructor(lname,ladress,lorg,lcontact){
        this.lname = lname;
        this.ladress = ladress;
        this.lorg = lorg
        this.lorg = lcontact
    }
}

const data1 = new Leads("madesha","Nanjagud","Arana","124");
const data2 = new Leads("madesha m","Nanjagudu","Aranae","1245");

console.log(data1.ladress);
console.log(data2.lname);