// // console.log(`Fundamentals Part: 2`);
// // console.log(`Part 2: Functions ready!`);

// // ////////////////////////////////////
// // // Functions - Declarations and Expressions
// // console.log(`=== FUNCTIONS ===`);

// // function logger() {
// //     console.log(`My name is Jonas`);
// // }

// // logger();
// // logger();
// // logger();

// // function fruitProcessor(apples, oranges) {
// //     console.log(apples, oranges);
// //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //     return juice;
// // }


// // const appleJuice = fruitProcessor(5, 0);
// // console.log(appleJuice);

// // const appleOrangeJuice = fruitProcessor(2, 4);
// // console.log(appleOrangeJuice);

// // ////////////////////////////////////
// // // Function Expressions
// // const calcAge = function (birthYear) {
// //   return 2037 - birthYear;
// // };

// // const age1 = calcAge (2000);
// // console.log(age1);

// // function calcAge2 (birthYear, currentYear) {
// //     const age = currentYear - birthYear;
// //     return age;
// // }

// // const myAge = calcAge2 (2005, 2025);
// // const someonesAge = calcAge2 (2007, 2025)
// // console.log(`I am ${myAge} years old and he is ${someonesAge} yearsold`);


// // // Handling Missing Parameters

// // function introduce(firstName, lastName, age) {
// //   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
// //   return introduction;
// // }

// // console.log(introduce("Jonas", "Schmedtmann", 46)); 
// // console.log(introduce("Sarah", )); 


// const globalVar = `I am global`;


// function testScope() {
//     const localVar = 'I am local';
//     console.log(globalVar);
//     console.log(localVar);
// }

// testScope ();
// console.log(globalVar);

// const userName = 'Jonas';

// function createWelcomeMessage(user) {
//     const message = `Welcome back, ${user}!`;
//     const timestamp = new Date().toLocaleTimeString();

//     return `${message} Current time: ${timestamp}`;
// }

// console.log(createWelcomeMessage(userName));

// ////////////////////////////////////
// // Coding Challenge #1

// // Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// }


// // Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//   } else {
//     return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`;
//   }
// }

// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

