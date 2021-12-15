// Problem 1
var lovesCode = true;
 if (lovesCode === true) {
   console.log('I love to code')
 } else {
   console.log("Coding has it's challenges")
 }

// Problem 2
var amysAge = 29
var brittanisAge = 34
var amysBirthYear = 1991
var brittanisBirthYear = 1986
var name1 = 'Amy'
var name2 = 'Brittany'

if (amysAge > brittanisAge) {
  console.log(`${name1} is older than ${name2}`)
} else if (brittanisAge > amysAge) {
  console.log(`${name2} is older than ${name1}`)
} else if (brittanisAge = amysAge) {
  console.log(`${name1} and ${name2} are the same age`)
}

// Problem 3
if (amysBirthYear === brittanisBirthYear) {
  console.log(`${name1} and ${name2} are born on the same year`) 
} else {
  console.log(`Amy and Brittany were not born on the same year`)
}


// Problem 4
let temperature = 55
let rain = true

if (temperature >= 80 && rain === true) {
  console.log('You should wear a t-shirt and take an umbrella') 
} else if ( 60 <= temperature <= 80 && rain === true) {
  console.log('You should wear a rain jacket') 
} else if (temperature >= 60) {
  console.log('you should just chill')
}

// Problem 5
for (let i = 0; i < 10; i++) {
  console.log('hello')
}


/*
  Create a for-loop that runs 10 times, logging the numbers 1 through 10. Ex, on the first iteration it would log 1, on the second iteration it would log 2.
*/

// Problem 6
var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
for (let i = 0; i < 10; i++) {
  console.log(arr[i]);
}

////////// PROBLEM 7 //////////

/*
  Create a for-loop that logs the numbers 0 through 10 backwards. Ex, on the first iteration it would log 10, on the second iteration it would log 9.
*/

//CODE HERE

let score = 0
let passingScore = 7

////////// PROBLEM 8 //////////

/*
  Create a while-loop that logs "Your score is not high enough" while the score variable above is below passingScore. In each iteration of the loop, increase the score by one. If your code is successful, you will see your logged statement 7 times.
*/

//CODE HERE

////////// INTERMEDIATE PROBLEMS //////////

////////// PROBLEM 9 //////////
/*
  Create a variable called 'changeMyMind' and set it equal to true. 
  Check to see if changeMyMind is set to true or false, if it is true, change the status to false, if it is false, change the status to true.

*/

//CODE HERE

////////// PROBLEM 10 //////////
// Try to change the value of changeMyMind (irrespective of whether it is true or false) and then console.log it's new status. It should log true. Hint: use the not operator.

//CODE HERE



////////// ADVANCED PROBLEMS //////////

////////// PROBLEM 11 //////////

let z = 5
// Create a while loop that continues to run while z is greater than 0. Within the while loop, log a countdown from the value of z to 1. Once you have logged the countdown, make sure you decrement z by 1. If your code is running properly, you should see: 5,4,3,2,1,4,3,2,1,3,2,1,2,1,1.

//CODE HERE