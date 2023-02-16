class Org{
    orgname;
    orgAddress;
    constructor(orgname,orgAddress){
        this.orgname=orgname
        this.orgAddress=orgAddress
    }

    orgInfo(){
        console.log(`${this.orgname}\n${this.orgAddress}`);
    }
}

class Leads extends Org{
    f_name;
    l_name;
    constructor(f_name,l_name){
       super("LT","Mysuru") //mandatory to call to super consturctor 
        this.f_name=f_name
        this.l_name=l_name
    }
    leadInfo(){
        console.log(`${this.f_name} ${this.l_name}`);
    }
    //overriding
    orgInfo(){
        console.log("hello");
    }
}

 lead1 = new Leads("Raj","Bir")
l = new Org("Raj","Bir")
lead1.leadInfo()
lead1.orgInfo()
l.orgInfo();