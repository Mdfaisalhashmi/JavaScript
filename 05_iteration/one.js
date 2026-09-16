// // for

// for (let index = 0; index <= 10 ; index++){
//     const element = index;
//     if(element == 7){
//         console.log("7 is the best number");
        
//     }
//     console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//    // console.log(`outer loop is ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//       // console.log(`outer loop is ${i} and the inner loop is${j}`);
//       // console.log(i + '*' + j + '=' + i*j)
//     }
    
    
// }

// let MyArray = ["superman", "batman" , "ironman"]

// for (let index = 0; index < MyArray.length; index++) {
//     const element = MyArray[index];
//     console.log(element);
    
    
// }

for (let index = 1; index <= 20; index++) {
    if (index === 5){
        console.log(`detected ${index}`);
        break;
    }
    console.log(`ìndex value is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index === 5){
        console.log(`detected ${index}`);
        continue;
    }
    console.log(`ìndex value is ${index}`);
}