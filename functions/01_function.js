function myName(){
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("i");
    console.log("l");
    
}
myName()

function addTwoNumbers (num1, num2){
   // console.log(num1+num2);
  /* let result = num1 + num2
   return result */
   return num1+num2
    
}
//addTwoNumbers(2,3)

const result = addTwoNumbers(2,3)
console.log("result",result);



function logginUser( username){
   //if(username===undefined){
    if(!username){

        console.log("please enter username ");
        return
        
    }
    return `${username} is loggedin `
}
console.log(logginUser("shaily"));
console.log(logginUser());


//shoping cart function 

function calcutePrice(val1, val2, ...cart){
    return cart
}
console.log(calcutePrice(200,400,500,2000));


const shoping = {
     name: "kavita",
     price : 199
}
 
function  handleobj (shop){
    console.log(`username is ${shop.name} and price is ${shop.price}`);
    
}
// handleobj(shoping)
handleobj({
    name : "shivani",
    price : 299
})


const array = [100,200,300,400,500]

function arrays(picknumber){
    return picknumber[4]
}
console.log(arrays(array));
