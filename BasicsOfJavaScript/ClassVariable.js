class Leads{
    //static is only one copy
    //these variables we cannot access directly like in java
    //whenever we create an object a copy of non static members will be created
    //changes done on non static variables in an instance will not reflect on others
    a = 10; //without object we cannot access. either "this"(non static) or "object"
    static b=20; //we can acces by using "this"(in static scope) or class name
    
    
//non static methods
     data(name,l) {
        //this keyword refer to the current object
       this.name=name;
       
       this.a=l
     // console.log(a);  // it will throw referenc error a is not defined
       
    //  console.log(this.a);
     //  console.log(this.b);//undefined
    //   console.log(Leads.b);
      // console.log(Leads.a);//undefined

    }
    
//static methods
    static ldetails(num){
        //this keyword refer to the static memory
        this.num = num
        this.a=13
        // console.log(b);//reference error b is not defined
        // console.log(l1.a);
         console.log(this.a);//undefined
        // console.log(this.b);
         //console.log(Leads.a);//undefined
        // console.log(Leads.b);
        
    }
    
}

 l1 = new Leads();
l2 = new Leads()
//console.log(l1.a);
//console.log(Leads.b);
//Leads.ldetails(1)
//data is non-static method cannot access using class name
//Leads.data(); //TypeError Leads.data is not a function
//console.log(Leads.num);
l1.data("eee")
//ldetails is static method cannot access using object
//l1.ldetails();//TypeError Leads.data is not a function
l2.data("ooo",1)
// console.log(l1.name);
// console.log(l2.name);
// console.log(l2.a);
// console.log(l1.a);
