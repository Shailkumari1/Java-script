const score = 200
console.log(score);
// taking value in Numbers only 
const balance= new Number(100)
console.log(balance);

//used in eccomerce 
console.log(balance.toFixed(2));//100.00
console.log(balance.toString().length); //3
 
const anotherNUmber = 23.09876
console.log(anotherNUmber.toPrecision(4));//23.10

const money= 1000000

console.log(money.toLocaleString());//en-us  =1,000,000
console.log(money.toLocaleString('en-IN')); //10,00,000

// max and min 
//NUmber.MAX_VALUE , Number.MIN_VALUE //USE IN CONSOLE WINDOW AND DRY RUN THERE 


//+++++++++++++  MATHS  +++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.6));
console.log(Math.min(2,3,4,5,6,7,8));
console.log(Math.max(2,3,4,5,6,7,8));


console.log(Math.random());
console.log((Math.random()*10) + 1);

console.log(Math.floor(Math.random()*10) + 1);

const min= 10
const max = 20

console.log(Math.floor(Math.random()* (max-min + 1)) + min)

