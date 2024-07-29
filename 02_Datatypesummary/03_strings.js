const name = "shaily"
const count= 50

// console.log(name + count + "value");

console.log(`Hello my name is ${name} and my repo count is ${count}`);


const gameName = new String(`shaily-verma-khushubu`)
console.log(gameName[6]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(5));
console.log(gameName.indexOf(`v`));

// substring and slice use for cut the value 0 to 5 
const newString= gameName.substring(0 ,5)
console.log(newString);

const anotherString = gameName.slice(-13, 5)
console.log(anotherString);

// trim the value when we not use speace on strings in start point and end point  we also use trimend and trimstart 

const newStringone = "   khushbu    "
console.log(newStringone);
console.log(newStringone.trim());

//Reaplace the value 

const url = "https/:shailyverma.com/shaily%20verma"
  console.log (url.replace('%20','-'));   

  // search the value and outupt in boolean 

  console.log(url.includes('verma'));

  //split

  console.log(gameName.split('-'));