//Dates 
let myDate =new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let mycreateDate =new Date(2023,0,23,5,3)
console.log(mycreateDate.toDateString());
console.log(mycreateDate.toLocaleDateString());

let createDate = new Date("01-13-2023")
console.log(createDate.getTime());// takes in airbnb clones how to takes dates 


let myTimestamp = Date.now()
console.log(myTimestamp)

//converts times in milisecondos 

console.log(Date.now()/1000);//1722683152.091

console.log(Math.floor(Date.now()/1000));// 1722683233

console.log(myDate.getMonth()+1);
console.log(myDate.getDay());

//`${newDate.getDay()} and the time `
 
 //newDate.toDateString('default',{
   // weekday : "long"
// })




