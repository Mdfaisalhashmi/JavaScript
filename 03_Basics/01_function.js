function saymyname(){
    console.log("m")
    console.log("d")
    console.log("f")
    console.log("a")
    console.log("i")
    console.log("s")
    console.log("a")
    console.log("l")
}
//saymyname()

// function addtwonumbers(number1 , number2){
//    console.log(number1 + number2);
// }
function addtwonumber(number1 , number2){
    let result = number1 + number2
    return result
}
const result = addtwonumber(4 , 5)

//console.log("result:", result)

function userloggindetail (username = "sam"){
    if(username === undefined){
        console.log("please enter the username")
        return
    }
    return `${username} just logged in`
}

//console.log(userloggindetail())

function calculatecartprice(...num1){
    return num1
}

//console.log(calculatecartprice(200 , 400 , 600))

const user = {
    username: "mdfaisalhashmi",
    price: 255
}

// function handleobj(anyobject){
//     console.log(`user name is ${anyobject.username} and the price is ${anyobject.price}`)
//}

function handleobj(user){
    console.log(`username is ${user.username} and the price is ${user.price}`)
}

// handleobj({
//     username: "sam",
//     price: 399
// })

const mynewArray = [200 , 300 , 600]

function returnsecondvalue(getArrays){
   return getArrays[1]
}

console.log(returnsecondvalue(mynewArray))