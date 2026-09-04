//const email = "mdfaisalhashmi22@gmail.com"

// if (email){
//     console.log("user have email address")
// }
// else{
//     console.log("user dont have email address")
// }

// const useremail = [],

//falsy value

//false, 0 , "", Bigint, 0n, -0, null , undefined, NaN


//truthy value

// "0" , 'false', [] , {} , function(){}, 

//const useremail = []

// if (useremail.length === 0){
//     console.log("please enter the Arrays")
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("objects is empty");
    
}

//nullish coleasing operator

let val1;
//val1 = 5 ?? 10;
val1 = null ?? 10

console.log(val1)

//ternary operator

let teaprice = 100;
teaprice <= 80 ? console.log("tea price is less than 80"): console.log("teaprice is grater than 80");

