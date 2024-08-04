//sigleton 

// objects literals

 const symbl = Symbol("key1")
const User = {
    name : "shaily",
    age : 18,
    location :"jaipur",
    Email : "shaily@gmail.com",
    isLoggedin : false,
    lastloginDay : ["moday","tuseday"],
    [symbl] : "mykey"

}
console.log(User.Email);//use this 
console.log(User["Email"]);
console.log(User[symbl]);


User.Email="shailyverma@gmail.com"
 //Object.freeze(User)
 User.Email= "khushbu@123"

console.log(User);

//functio

User.greeting = function(){
    
    console.log("hi user");
    console.log(`hi user,${this.name}`);//reference
    
}
  console.log(User.greeting());
  


