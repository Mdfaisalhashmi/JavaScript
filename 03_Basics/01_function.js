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

console.log(userloggindetail())

