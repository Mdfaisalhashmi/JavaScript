//data types
// primitive datatypes
// datatypes = string , number, boolean , null , undefined , symbol , bigint



export const score = 100;
export const scorevalue = 100.3;
export const isloggedin = true;

export const temp = null;

// console.log(typeof score)
// console.log(typeof scorevalue)
// console.log(typeof isloggedin)

const id = Symbol('123')
const anotherid = Symbol('123')

// console.log(id === anotherid);

const bignumber = 3452568824722426

// console.log(typeof bignumber);



//Refernce (non premitive datatypes)
//non-primitivedatatypes = arrays, object, function

const heros = ["ironman" , "hulk" , "spiderman"];

let myobj = {
name: "md faisal",
age: 26
}

const myfunction = function(){

    console.log("hello world");

}

console.log(typeof myfunction);
console.log(typeof null)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive datatypes) heap (non-premitive datatypes)

let myname = "mdfaisalhashmi"

let mynewname = myname
mynewname = "mdfaisalhashmi22"

// console.log(mynewname)

let userone = {
    email: "mdfaisal@gmail.com",
    upi: "upi@ybl"
}

let usertwo = userone

usertwo.email = "mdfaisalhashmi22@gmail.com"

// let usertwo = {
//     email: "mdfaisalhashmi22@gmail.com",
//     upi:"upi123@ybl"
// }

console.log(userone)
console.log(usertwo);


