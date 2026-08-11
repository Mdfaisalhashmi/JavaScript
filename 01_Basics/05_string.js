const name = "md faisal"
const age = 26


//console.log(name + age + "value");

console.log(`hellow my is ${name} my age is ${age}`);

const gamename = new String('randomkiller')

// console.log(gamename[0]);
// console.log(gamename.__proto__)

// console.log(gamename.toUpperCase())

console.log(gamename.charAt(2));
console.log(gamename.indexOf('k'));

const newstring = gamename.substring(0, 4)
console.log(newstring);

const anotherstring = gamename.slice(-12 , 5)
console.log(anotherstring)

const gamenameone = "    randomkiller    "
console.log(gamenameone);
console.log(gamenameone.trim());

let url = "mdfaisalhashmi%20@gmail.com"
console.log(url.replace('%20' , '-'))

console.log(url.includes('mdfaisal'))