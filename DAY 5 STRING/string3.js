
// string method any example 

let text= "hello world";

//split()method 

console.log("split string into array with  space added", text.split(" "));
console.log("split string into array without  space ", text.split(""));
console.log("split string with o", text.split("l"));


//startwith() method


console.log("startwith method ", text.startsWith("hello"));
console.log("startwith method ", text.startsWith("dharmik"));

// start or end less then 0, are treated as 0

console.log ("text", text);


console.log( "substring  => ", text.substring(4));
console.log( "substring  => ", text.substring(4,9));
console.log("subsrtring string with ", text.substring(-1));

// tolovercase 

console.log("lowerCase =>", text.toLowerCase());


// touppercase
console.log("upper Case =>", text.toUpperCase());


// trim method()
let trimTextExample ="     hello     ";

console.log("length text for trim => ", trimTextExample.length);

console.log("then after  length of string =>", trimTextExample.trim().length)

// trim start method()

console.log(" start for trim after then string",trimTextExample.trimStart().length

);

//trimend  method()


console.log(" end for trim after then string ", trimTextExample.trimEnd().length)