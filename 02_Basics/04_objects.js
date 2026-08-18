//const tinderuser = new Object() singleton objects
const tinderuser = {}

tinderuser.id = "md123"
tinderuser.name = "mdfaisalhashmi"
tinderuser.age = 25
tinderuser.isloggedin  = false


//console.log(tinderuser)

const newuser ={
    name: "mdfaisalhashmi",
    username:{
        personalname:{
            firstname: "mdfaisal",
            lastname: "hashmi"
        }
    }
}

//console.log(newuser.username.personalname.lastname);

const obj1 = {1: "a" , 2:"b"}
const obj2 = {3: "a" , 4:"b"}
const obj3 = {5: "a" , 6:"b"}

//const Object4 = Object.assign({}, obj1 , obj2 , obj3)
const obj4 = {...obj1 , ...obj2, ...obj3}

//console.log(obj4);

console.log(tinderuser)
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isloggedin'));


