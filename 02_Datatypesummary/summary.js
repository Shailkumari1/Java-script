//JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime.Unlike languages such as Typescript or Java, you don’t need to declare the data type of a variable explicitly.

//1_premitive type (call by value )   copy value return 
//type of 7:-  string ,Number ,Boolean,null, undefined,BigInt,symbol

const myName="shaily"
const myNumber =1234
const myBooleanvalue = false
const value = null
let game ;
 const bigNumber =12345678901111n

 const id= Symbol('1234')
 const anotherId =Symbol('1234')

 console.log(id===anotherId);

//2_Non-preanitive(call by Reference) real value reaturn 
//type of :- Arrays ,obejects,Functions 

const mySuperheroname= ["myfamily","myfriends", "myteachers"];

let myobject ={
    Id :"2345",
    Branchname : "IT",
    city : "Delhi"

}

const myFunction = function(){

    console.log("this is javascript");

}

//all typeof
console.log(typeof id);
console.log(typeof myFunction);
console.log(typeof myobject);


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//stack (premitive)and copy memory

let mynamee= "shaily verma"
let nickName = mynamee
nickName="khusbu"

console.log(mynamee);
console.log(nickName);

//Heap (non premitive)memory refernce the value 
let userOne ={
    email: "shaily@gamil.com",
    upi: "uer@ybls"

}

let userTwo = userOne
    userTwo.email= "vermashaily@1234"

    console.log(userOne);
    console.log(userOne.email);
    console.log(userTwo);
    console.log(userTwo.email);

