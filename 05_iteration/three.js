// for of

let myArray = [1 , 2  , 3 , 4]

for (const arr of myArray) {
   // console.log(arr)
}

let greetings = "hello world!"

for (const greet of greetings) {
    //console.log(`${greet}`);  
    
}

const map = new Map()

map.set("IN" , "INDIA")
map.set("usa" , "united states of america")
map.set("fr" , "france")    

//console.log(map)

for (const [key , value] of map){
    console.log(key, ':-' , value)
}

const myobj = {
   name: "mdfaisal",
   age: 25
}

for (const obj of myobj) {
 console.log(obj);
 
}