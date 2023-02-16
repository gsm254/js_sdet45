async function sync() {
    console.log("login to application");
    var p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("clicked");
            reject("rejected");
        }, 2000)
    })

    await p.then((msg) => { console.log(msg); }).catch((msg) => { console.log(msg);})
    console.log("logout");
}
 function bsync() {
    console.log("login to application 2");
    var p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("clicked 2");
            reject("rejected ");
        }, 2000)
    })

     p.then((msg) => { console.log(msg); }).catch((msg) => { console.log(msg);})
    console.log("logout 2");
}


sync()
bsync()