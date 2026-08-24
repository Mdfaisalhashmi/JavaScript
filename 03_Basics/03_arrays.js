const gretting = {
    username: "mdfaialhashmi",
    price: 999,

    usergretting : function(){
        console.log(`${this.username} , welcome to the websites`)
        //console.log(this)
    }
}

// gretting.usergretting()
// //console.log(typeof gretting);
// gretting.username = "john"
// gretting.usergretting()

//console.log(this);

// function one(){
//     let username = "mdfaisal"
//     console.log(this.username)
// }

// one()

// const hello = () => {
//   let username = "mdfaisal"
//   console.log(this)
// }

const addtwonum = (num1 , num2) =>{
    return num1  + num2
}

//console.log(addtwonum(5 , 10))

const addthreenum =(num1 , num2 , num3) => num1 + num2 + num3
console.log(addthreenum(5 , 10 , 15));
