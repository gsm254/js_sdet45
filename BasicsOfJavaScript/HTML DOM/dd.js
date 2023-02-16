class a{
    b=10
    a=()=>{
        console.log(this.b);
    }
}


c=new a()
c.a();

