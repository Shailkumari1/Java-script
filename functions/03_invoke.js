//Immediately Invoked Function Expressions IIFE 

//global fuction kai pollutions sai bachne k liye we use invoke function 

(function Invokke(){
    //named IIFE
    console.log(`DB connected`);
    
})();// use semicolon for stop function 

(()=>{
    //simple IIFE
    console.log(`DB CONNECTED TWO`);
    
})();// use semicolon for stop function 


((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
    
})("joker")