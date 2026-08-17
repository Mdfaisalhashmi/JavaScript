const mysym = Symbol("key1")

const jsuser ={
    name: "mdfaisalhashmi",
    [mysym]: "key1",
    "myfullname": "mdfaisalhashmi22",
    age: 26,
    email: "mdfaisalhashmi22@gmail.com",
    isloggedin: true,
    location: 'abu dhabi'
}

jsuser.greeting = function(){
    console.log("hello js user");
    
}
jsuser.greetingtwo = function(){
    console.log(`hello js user ${this.name}`)
}


// jsuser.email = "mdfaisalhashmi@gmail.com"
// Object.freeze(jsuser)
// jsuser.email = "mdfaisal@gmail.com"

// console.log(jsuser.myfullname)
// console.log(jsuser[mysym]);

console.log(jsuser.greeting())
console.log(jsuser.greetingtwo());
console.log(jsuser);

