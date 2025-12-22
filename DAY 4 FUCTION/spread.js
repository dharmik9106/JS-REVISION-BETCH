
// spread function
let numarray = [1,2,3,4,5];
console.log(...numarray);


function fruitsname(fruits){
    console.log("banana","cherry",  "mango", "apple", "guava")
}

let availablefruits = [" apple ", "banana" , "cherry", "orange",]
fruitsname(availablefruits);

// rest function

function allphoto(...galery) {
    console.log ("you can  save my photo : ", ...galery);
}

allphoto(
    "home-photo","picnic-photo","temple-photo",

);