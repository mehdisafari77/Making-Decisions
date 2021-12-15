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

// Problem 6
var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
for (let i of arr) {
  console.log(i);
}

// Problem 7
var arr2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
for (var i = arr.length - 1; i >= 0; i--) {
  console.log(arr2[i]);
}

// Problem 8
let score = 0
let passingScore = 7

while(score < passingScore) {
  console.log('Your score is not high enough!')
  score++
  if (score === passingScore) {
    console.log('Congrats your score is now high enough!')
  }
}

// Problem 9 & 10
var changeMyMind = false
if (changeMyMind === false) {
  changeMyMind = !changeMyMind
} else if (changeMyMind === true) {
  changeMyMind = !changeMyMind
}
console.log(changeMyMind)


// Problem 11
let z = 5
// Create a while loop that continues to run while z is greater than 0. Within the while loop, log a countdown from the value of z to 1. Once you have logged the countdown, make sure you decrement z by 1. If your code is running properly, you should see: 5,4,3,2,1,4,3,2,1,3,2,1,2,1,1.

while(z > 0) {
  z = z-1
  console.log(z)
}


// for ( x = 0; x <= 5; x++) {
//   for ( y = 0; y <= 1; y++) {
//       console.log(x + y);
//   }
// }