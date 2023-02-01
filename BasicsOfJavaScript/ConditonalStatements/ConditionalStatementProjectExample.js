//ifelse blocks
let org = true;
if (org) {
    console.log("organization is present");
} else {
    console.log("orgnization not present");
}

//if, else if, else blocks statements
let permanentAddress = false;
let billingAddress = true;
if(permanentAddress){
    console.log("premanent address added");
}
else if(billingAddress){
    console.log("billing address added");
}
else{
    console.log("either one of the address sis mandatory");
}

//switch conditional statement
let search = "Oraganization No"
switch (search) {
    case "Organization Industry":
        console.log("search by "+ search);
        break;
    case "Organization No":
        
    console.log("search by "+ search);
        break;
 

    default:
        console.log("search by Organization Name");
        break;
}

//ternery conditional statement
let stock = 100;
let qty = 50;
console.log(stock<=qty?"stock is available":"no stocks");