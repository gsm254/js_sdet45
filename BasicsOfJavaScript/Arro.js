
class org {
    orgname;
    orgAddress;
    lk = "rr"
    a = 2
    arr = [1, 2, 3, 4]
    ab() {
        return this.arr.filter(function (abc) {
            return abc > this.a
        })
    }
    abc() {
        this.arr.filter((abc) => {
            return abc > this.a
        })
    }
    constructor(orgname, orgAddress) {
        this.orgname = orgname
        this.orgAddress = orgAddress
    }

    orgInfo() {
        console.log(`${this.orgname}\n${this.orgAddress}`);
        let c = () => {
            console.log(this.orgname);
        }
        c()


    }
    org = {
        lk: "djdjdj",
        info: () => {
            console.log(this.lk);
        }
    }
}

or1 = new org("dd", "ddd")

//or1.abc()
or1.ab()

