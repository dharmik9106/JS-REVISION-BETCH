

let text= "sanga Dharmik"

// match method 
console.log(" find our match for any photo :  "+text.match("Dh"));

//if not find over match method 

// console.log ("not  find over matching  in string : "+text.match(sa));


//repeate mathod 
console.log("repeating the all string: ",text.repeat(3));

// replace method 

console.log("replacing the string : ", text.replace("hello","hii"));


// replaceall method 

console.log("replaceall the string : ", text.replaceAll("a" ,"A"));


// search() method

console.log("searching D in text: ", text.search("D"));

//indexof start:

console.log("indexof  with starting index =>",text.indexOf("h", "6"));

//slice method:

console.log("slice :",text.slice(0));
console.log("slice :",text.slice(4,5));
console.log("slice :",text.slice(3,5));
console.log("slice :",text.slice(-1));
