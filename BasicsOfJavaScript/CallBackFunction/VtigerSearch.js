function leadInfo(lname){
    return "leadDetails of " +lname
}
function contactInfo(cname){
    return "leadDetails of "+cname
}

function info(name,callBackfn) {
    console.log(callBackfn(name));
}

info("rajashekar",leadInfo)
info("Muniraj",contactInfo)