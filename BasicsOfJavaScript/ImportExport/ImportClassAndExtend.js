let Assets = require('./ExportClass')

class A1 extends Assets{
   constructor()
   {
    super()
   }
}

let obj = new A1();
obj.ndisplay()
console.log(obj.name);
Assets.display()
console.log(Assets.address);