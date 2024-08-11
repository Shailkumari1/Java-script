// const tinderUser = new Object()
const tinderUser = {}
 //console.log(tinderUser);
 
 tinderUser.id ="9987621"
 tinderUser.name = "jelly"
 tinderUser.isLoggedin = false 

 console.log(tinderUser);

 const regularName ={
    fullName :{
        userName: {
            firstName : "khushbu",
            lastName : "verma"
            
        }
    }
 }
   console.log(regularName.fullName.userName.firstName);

 // add objects 
   const obj1 = {1:"a", 2: "b"}
   const obj2 = {3:"a", 4: "b"}

  // const obj3 = {obj1,obj2}
 // const obj3 = Object.assign ({},obj1,obj2)
 const obj3 ={...obj1,...obj2}// use this mostly 
   console.log(obj3);


   const users = [
    {
        id: 1,
        email :"g@MediaList.com"
        
    }
    ,
    {
        id: 2,
        email :"v@MediaList.com"
        
    },
    {
        id: 3,
        email :"k@MediaList.com"
        
    }
   ]
    console.log(users[0].email);

    console.log(tinderUser);
    console.log(Object.keys(tinderUser));
    console.log(Object.values(tinderUser));
    console.log(Object.entries(tinderUser));
    console.log(tinderUser.hasOwnProperty('isLoggedin'));
    
    
    
   //+++++++++ De -structuring of objecys +++++++++

   const course = {
    coursename : "javawithDSA",
    price : "899",
    courseinstructor : "shaily"
   }

   //course.courseinstructor 

   const {courseinstructor : instructor }= course
   //console.log(courseinstructor);
   console.log(instructor);


   //in react 

   const varable = ({company}) =>{

   }
   varable(company = "Dreamspot")
   
   