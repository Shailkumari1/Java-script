// gloabal scope

let  a=300
const b =300

// local scope 

if(true){
     let a=10
     const b =20
     console.log("innerr",a);
     console.log("innerr",b);
     
}

console.log(a);// global scope =300


//nesting scope 

function one (){
    const userName = " shaily "

    function Two(){
        const price =199
        console.log(userName);// we call parentes node 
        
    }
   // console.log( price ); //give error because we cannot access the price only access in fuction 
     Two()
    
}
one()
