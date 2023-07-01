// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // do not touch this code
}

// Add event listener to generate button
// all code i need to write goes here and only here
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

}

// prompt how many characters
// need a var for characters


// what type of characters
// special,number,upper,lower
// window.confirm    confirming what user picked

// to use answers to make password
// need vars that include all possible characters
// separate vars for each type, make them arrays
// example var upperLetters = ["A", "B", "C", ] every letter in the alphabet and all numbers 0-1 as well as all special characters


// take all true arrays and concat into new array
// choose random chars from arrays based on user input
// var push into new array
// var password = turn array into string    .toString()


// return password;