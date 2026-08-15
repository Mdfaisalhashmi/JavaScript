const marvel_heroes = ["ironman" , "thor" , "captainamerica"]
const dc_heroes = ["superman" , "batman" , "flash"]

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes[3][1])

// const allheroes = marvel_heroes.concat(dc_heroes)
// console.log(allheroes);

const all_new_heroes = [...marvel_heroes , ...dc_heroes]
//console.log(all_new_heroes);

const another_arrays = [1 , 2, 3, [1 , 2, 5], 7 , [8 , 9] , 6]

const new_another_arrays = another_arrays.flat(Infinity)
//console.log(new_another_arrays);

//console.log(Array.isArray("mdfaisal"))
//console.log(Array.from("faisal"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3))





