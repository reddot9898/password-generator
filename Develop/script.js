// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // do not touch this code
}
// all my code goes here down and only here 
//  need to prompt users how long they would like password to be
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




generateBtn.addEventListener("click", writePassword);

var password = "";

var passwordLength = function () {
  // this function is allowing me to ask the user how long do they want there password to be
  // as well as putting in an alert if the user chooses an incorrect length using alert
  var lengthPass = prompt("Enter Length of New Password. Must Be Between 8 and 128 Characters Long.");

  if (lengthPass < 8 || lengthPass > 128 || lengthPass === "") {
    alert("Invalid Length Entry. Password Must Be Between 8 and 128 Characters.")

    return passwordLength;
  }

  //this will turn my string into a number , again had to research this and still confused but trying to learn and understand it better
  lengthPass = Math.floor(Number(lengthPass));

  return lengthPass;
}


var generatePassword = function () {
  // password will be global and i can call on it 
  password = "";


  var lengthPassword = passwordLength();

  //this function will determine my character sets , had to research a good bit of this 
  // as we didnt touch on the math.floor or math.random 
  var passwordInclusions = charaInclusions();
  var passwordInclusionsLength = passwordInclusions.length;

  for (var i = 0; i < lengthPassword; i++) {
    password += passwordInclusions.charAt(Math.floor(Math.random() * passwordInclusionsLength));
  }

  return password;
};













