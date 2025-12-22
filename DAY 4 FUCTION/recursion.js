

function fectorial(num){
    if(num<0){
        return "factorial is not defined not negative  numbers";
    }
    else if(num === 0 || num === 1){
        return ;
    }else{
            return num * fectorial(num -1);

        }
}
 console.log(fectorial(5));