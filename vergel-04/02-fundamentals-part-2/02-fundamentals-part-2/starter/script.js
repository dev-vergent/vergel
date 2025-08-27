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

// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// const mixed = ["Jonas", 27, true, grades];
// console.log(mixed);


// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// access array elements
// console.log(grades[0]);
// console.log(grades[4]);

// console.log(grades.length);

// console.log(grades[0]);
// grades[0] = 99;
// console.log(grades);
// console.log(grades[0]);
// console.log(grades[0]);


// const calcAge = function(birthYear) {
//     return 2025 - birthYear
// }

// const ages = [calcAge(2000), calcAge(1995), calcAge(1991)];
// console.log(ages);
// ages[1] = calcAge(1950);
// console.log(ages);


// Array Methods - Adding Elements

// const friends = ["Michael", "Steven", "Peter"];

// const newLength = friends.push(`Jay`);
// console.log(friends);
// console.log(newLength);

// // add elements as first
// friends.unshift(`John`);
// console.log(friends);

// // Pop - remove from end
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// // Shift - remove from beginning
// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// // IndexOf - find position of element
// console.log(friends.indexOf("Michael"));
// console.log(friends.indexOf('Bob'))

// // Includes - check if element exists
// console.log(friends.includes("Steven")); 
// console.log(friends.includes("Bob"));

// // Array Iteration - Loops
// const friends2 = ["Michael", "Steven", "Peter"];

// for (let i = 0; i < friends2.length; i++) {
//     console.log(friends[i]);
// }

// friends2.forEach (function (friend, index) {
//     console.log(`${index}: ${friend}`);
// });

// const grades = [85, 92, 78, 96, 88,74];
// let total = 0;

// for (let i = 0; i < grades.length; i++) {
//     const element = grades[i];
// }

// const average = total / grades.length;
// console.log (`Average grade: ${average.toFixed(2)}`);


// let passCount = 0;
// grades.forEach((grades) =>  {
//     if (grades >= 70) passCount++;
// });

// console.log(`${passCount} out of ${grades.length}students passed`);

// // for loop with processing
// const years2 = [1991, 2007, 1969, 2020];
// const ages2 =[]

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

////////////////////////////////////
// Coding Challenge #2 - Student Grade Manager
const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// Function to calculate average
  function calculateAverage(grades) {
  let sum = 0;                 
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];          
  }
  return sum / grades.length;  
}

// Function to find highest grade
function findHighestGrade(grades) {
  let highest = grades[0];
  for (let i = 1; i< grades.length; i++) {
    if (grades[i] > highest) {
        highest = grades[i];
    }
  }
  return highest;
}

// Function to find lowest grade
function findLowestGrade(grades) {
  let lowest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] < lowest) {
        lowest = grades[i];
    }
  }
  return lowest;
}

// Function to count passing students
function countPassing(grades, passingGrade) {
  let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= passingGrade) {
        count++;
    }
  }
  return count;
}

// Generate complete report
const average = calculateAverage(grades);
const highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);


