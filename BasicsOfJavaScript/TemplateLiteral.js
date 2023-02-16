// Template Literals
// Template Strings
// String Templates
// Back-Ticks Syntax

//we can use single qoutes and double quote inside template
//we can define template we want to output to display
//String should be enclosed with backtick (`)
//syntax: `any data ${variable}`

// Interpolation
// Template literals provide an easy way to interpolate variables and expressions into strings.
// The method is called string interpolation.
// syntax: ${..}


function template(name,address) {
    console.log(`company name ${name}
    company address ${address}`);
}

template("Lt","Bengaluru")