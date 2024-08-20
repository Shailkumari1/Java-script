const user ={
    username : "shaily",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username},welcome to website`);
        console.log(this);// this use for current sitution print 
        
        
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);//in node = empty, 

// this is not use in function only use in objects 

/*function price (){
    tag : 99
    console.log(this.tag);//undefined 
    
}
price()*/


 // arrow function 

 //const arrow = function  (){
    const arrow =()=>{ //arrow 
    tag : 99
    console.log(this.tag);//undefined 
    
}

arrow()


const addTwo= (num1,num2)=> {
    return num1+num2
}

console.log(addTwo(3,4));

//implicit return 
//const addTwoNO= (num1,num2)=>  num1+num2
const addTwoNO= (num1,num2)=>  (num1+num2)

console.log(addTwo(3,4));


 
