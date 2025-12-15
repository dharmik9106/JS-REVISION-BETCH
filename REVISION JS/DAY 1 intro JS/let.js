
    //  using let and const variable 


    function checkblockofscop(){

        let message =" hello sir good morning";

        if(true ){
            let blockMessage= "hello from the block !";
            console.log(blockMessage); // Accessible here 
        }
        console.log(message);

    }

    checkblockofscop();


    let person ;


    person = " dharmik ahir ";


    console.log("here variable value will  be chenge => " , person)