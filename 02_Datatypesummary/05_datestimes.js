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

let myTimestamp = Date.now()
console.log(myTimestamp)
