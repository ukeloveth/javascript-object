//alert("God is good");
//QUESTION
// For each of the exercise below, assume you are starting with the following programming object
// let programming ={
//     languages: ["Javascript","Python","Rubby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };
// 1. Write the command to add the language "Go" to the end of the languages array.
// 2. Change the difficulty to the value of 7
// 3. using the delete keyword,Write the command to remove the jokes key from the programming Object
// 4. Write the command to add a new key called isFun and a value of true to the  programming Object
// 5. using a loop,iterate through the languages array and console.log all of the languages.
// 6. using a loop, console.log all of the keys in the programming Object
// 7. using a loop, console.log all of the values in the programming Object
//solution.

let programming ={
        languages: ["Javascript","Python","Rubby"],
        isChallenging: true,
        isRewarding: true,
        difficulty: 8,
        jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
    };
 //1. Write the command to add the language "Go" to the end of the languages array.
 //console.log(programming.languages.splice(3,0,"Go")

 // 2. Change the difficulty to the value of 7
 

 //3. using the delete keyword,Write the command to remove the jokes key from the programming Object
 //delete programming.jokes
// console.log(programming)
  
 // 4. Write the command to add a new key called isFun and a value of true to the  programming Object
 programming["isFun"]= 'true'
 console.log(programming)
 //5. using a loop,iterate through the languages array and console.log all of the languages.
//  for(let key in programming){
//    // console.log(programming.languages)
// }

// //6. using a loop, console.log all of the keys in the programming Object
// for(let key in programming){
//     //console.log([key])
// }

// //7. using a loop, console.log all of the values in the programming Object
// for(let key in programming){
//    // console.log(programming[key])
// }