//array
 const myArray = [0,1,2,3,4,5,6]
 

 //const mynewArrays =new Array(1,2,3,4,5)

 console.log(myArray[1]);
 //console.log(mynewArrays);

 //Arrays Methods
  myArray.push(7)//add
  myArray.pop()//delete
  //myArray.unshift(8)
  myArray.shift()//shift the value
  console.log(myArray);

  console.log(myArray.includes(9)); //get boolean outputs
  console.log(myArray.indexOf(3));

  //change in string 

  const newArra = myArray.join()
  console.log( typeof newArra);
  console.log(newArra);

  //slice and splice Arrays
  const myspc= [2,4,6,7,8,10]
  const mynarr1= myspc.slice(1,5)
  console.log(myspc,"A");
  console.log(mynarr1);//[ 4, 6, 7, 8 ]

  const mynarr2= myspc.splice(1,3)
  console.log(myspc,"B");//[ 2, 8, 10 ] 
  
  console.log(mynarr2);// 4, 6, 7 ]

  // add arrays covert to arrays 
  const myheroes= ["shaktimar","spiderman","Ironman"]
  const dc_heroes= ["superman","flash","Batman"]

  /*myheroes.push(dc_heroes)
  console.log(myheroes);
  console.log(myheroes[3][1]);*/


  const myAllheroes= myheroes.concat(dc_heroes)
  console.log(myAllheroes);
//unique to add arrays //  use this mostly
  const allnewHeroes =[...myheroes, ...dc_heroes]
  console.log(allnewHeroes);
  

  const anotherArray= [1,2,3,[4,5,6,[7,8,9]]]
  const output =anotherArray.flat(Infinity)
  console.log(output);

  console.log(Array.isArray("shailyverma"));
  console.log(Array.from("shailyverma"));
  console.log(Array.from({name:"shailyverma"}));//intresting

  //convert to Arrays 
   let score1 = 100
   let score2=200
   let score3 = 300

  console.log(Array.of(score1,score2,score3));
  
  
  
  

  
  
  
  
  
  
  
 
 