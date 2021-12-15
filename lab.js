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
var a = 'Amy'
var b = 'Brittany'

if (amysAge > brittanisAge) {
  console.log(`${a} is older than ${b}`)
} else if (brittanisAge > amysAge) {
  console.log(`${a} is older than ${b}`)
} else if (brittanisAge = amysAge) {
  console.log(`${a} and ${b} are the same age`)
}

// Problem 3
if (amysBirthYear === brittanisBirthYear) {
  console.log(`${a} and ${b} are born on the same year`) 
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
  console.log('Hello')
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
while(z > 0) {
  for (let i = z; i > 0; i--) {
    console.log(i)
  }
  z--
}
