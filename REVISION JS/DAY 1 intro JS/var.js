

// 1. var


// 2. const


// 3. let


//  var  has  functional scope which means it accessible in function body outside its not accessible if we try to access it we will get an reference error

// example

function sayname(){
    var person =" dharmik sanga ";
    console.log("person ->", person);

}

// console.log(person);

// function invocation


sayname();

// variable  declaration


let num;

num= 34;

console.log(num);