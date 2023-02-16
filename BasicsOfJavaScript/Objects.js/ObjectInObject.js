var OrgDetails = {
    orgname:"LT",
    orgnum:"123",
    details:(orgname,orgnum) =>{console.log(orgname);
        console.log(orgnum);}
}

var OrgDetail = {
    orgname:"LT",
    orgnum:"123",
    details:(orgname,orgnum) =>{console.log(orgname);
        console.log(orgnum);},
    orgDetObj:OrgDetails
}

// console.log(OrgDetails.orgname);
// console.log(OrgDetails.orgnum);
// OrgDetails.details(OrgDetails.orgname,OrgDetails.orgnum);
// console.log(OrgDetails);
// console.log(OrgDetail.orgDetObj);
console.log(OrgDetail.orgDetObj.details);