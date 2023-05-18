// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// 1.) create 2 parameters for the arguments for the arguments to return to.
// 2.) Build a else/ if statement brings the action of determining which string has the most charactere
    // * 

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// Expected outcome: "cherry"

// const fruitFoot = (string1, string2) => {
//     if (string1.length > string2.length) {
//         return string1
//     } else {  
//         return string2
// }
// }

//     console.log(fruitFoot(fruit1, fruit2)) 
//     console.log(fruitFoot(fruit3, fruit4))

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:

//              key:
                
//              * = example


// 1.) We have to give a value for the code to compare the given temperature to the boiling point.

//      *const temp = (point1)


// 2.) We set the conditions (else/if statements) for the value for the comparisons to take place for each temperature.

//      *const temp = (point1) => {
//          if ( point1 < 212)
//          }
//     else if (point1 > 212) {
//  }
//   else if (point1 = 212) {
//  }


// 3.) We make functions call (console.log) that will take the values (in a form of an argument) for the terminal; to run the code for each temperature. Comparing it to the boiling point.

// *   console.log(temp(temperature1))
//     console.log(temp(temperature2))
//     console.log(temp(temperature3))


// 4.) Give a return of the answer and write out each string that coresponds with the number that is greater than, less than, or equal to the boiling point.

// * const temp = (point1) => {
//     if ( point1 < 212) {
//         return `${point1} is below boiling point`
//     }
//     else if (point1 > 212) {
//         return `${point1} is above boiling point`
//     } 
//     else if (point1 = 212) {
//         return `${point1} is at boiling point`
//     }
// }

// Given Numbers:

// const temperature1 = 42
// // Expected output: "42 is below boiling point"

// const temperature2 = 350
// // Expected output: "350 is above boiling point"

// const temperature3 = 212
// Expected output: "212 is at boiling point"

// Answer:

// const temperature1 = 42

// const temperature2 = 350

// const temperature3 = 212

// const temp = (point1) => {
//     if ( point1 < 212) {
//         return `${point1} is below boiling point`
//     }
//     else if (point1 > 212) {
//         return `${point1} is above boiling point`
//     } 
//     else if (point1 = 212) {
//         return `${point1} is at boiling point`
//     }
// }

//     console.log(temp(temperature1))
//     console.log(temp(temperature2))
//     console.log(temp(temperature3))

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:

// 1.) Establish the elements of the variables with the arrays. Differeciate each variables to combine the arrays.

// * const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]


// 2.) Create a new variable (padres1984WorldSeriesRuns3) and have it equal to the combination of the first two variables that we established using an operator.
//     Im using the Spread Operator to in my work.

// * const padres1984WorldSeriesRuns3 = [...padres1984WorldSeriesRuns1, ...padres1998WorldSeriesRuns2];


// 3.) Use cosole.log function call to run the merged variables and add the .length built-in method to determine the length of the arrays which is 9.   


// Given arrays:

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Answer:

// const padres1984WorldSeriesRuns1 = [2, 5, 2, 2, 4];
// const padres1998WorldSeriesRuns2 = [6, 3, 5, 3];
// const padres1984WorldSeriesRuns3 = [...padres1984WorldSeriesRuns1, ...padres1998WorldSeriesRuns2];

// console.log(padres1984WorldSeriesRuns3.length);

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:

// 1.) Declare the variable as the string "Delta 2023"

//  * const currentCohort = "Delta 2023"


// 2.) Declare a new variable that takes the string("Delta 2023") and convert the string data into elements an array. Also, adding the spread operator to  turn each character in the string into individial arguments.

//  * const myTeam = [...currentCohort].reverse().join("");

// 3.) In conjunction with the spread operator, add the .reverse() and .join() built-in method to convert the your array back to a string 
//     (.join("")) and to display the output of the string in reverse (.reverse()).

// * console.log(myTeam)

// 4.) create a console.log() function call with the variable that houses the string with both function calls and run it on your terminal for the desired answer.


// * const myTeam = [...currentCohort]

//Given String: 

// const currentCohort = "Delta 2023"
// Expected output: "3202 atleD"

// Answer:

// const currentCohort = "Delta 2023";

// const myTeam = [...currentCohort].reverse().join("");

// console.log(myTeam)


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

// 1.) Declare the numberOfConnections equal to the array.

// 2.) Declare two elements (42 and 10) in the array and give it a variable.

// 3.) make two cosole.log function calls with the variable of the array as the argument with the .lastIndexOf built-in method added after the variable to reference it in the terminal. 
// In the parenthesis, type the given values (42 and 10) to its respected function and recieve the   
//desired results.


//Given Code:


// const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

// const givenValue1 = 42
// // Expected output: 7

// const givenValue2 = 10
// Expected output: 8

// Answer:

// const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

// const givenValue1 = 42

// const givenValue2 = 10

// console.log(numberOfConnections.lastIndexOf(42))
// console.log(numberOfConnections.lastIndexOf(10))

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

// 1.) Declare the two variables with the given arrays to each variable with the equal operator.

// 2.) Write a console.log function call with each variable in the agrument. Also add the .sort() to have it in or from lowest to highest.

// 3.) Add the .reverse() built-in method after the .sort() fbuilt-in method to have the array code run in reverse to get desired answer.

// const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// // Expected output: [82, 80, 79, 77, 76, 73, 72]

// const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// // Expected output: [68, 67, 66, 66, 62, 59, 59]

// Answer:

// const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// // Expected output: [82, 80, 79, 77, 76, 73, 72]

// const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// // Expected output: [68, 67, 66, 66, 62, 59, 59]

// console.log(sanDiegoSummerTemperatures.sort().reverse())
// console.log(sanDiegoWinterTemperatures.sort().reverse())