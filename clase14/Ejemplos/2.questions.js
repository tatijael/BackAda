

const readLineSync = require('readline-sync')

const age = readLineSync.questionInt('Please, enter your age:')

if (age >= 18.5) {
  console.log("You are an adult and can enter the club.");
} else {
  console.log("Sorry, you cannot enter the club.");
}