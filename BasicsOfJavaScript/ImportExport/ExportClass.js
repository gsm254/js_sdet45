class Assets{
    name=10;
    static address="Mysuru"

    ndisplay(){
        console.log(this.name);
    }

    static display(){
        console.log(this.address);
    }
}

module.exports = Assets;