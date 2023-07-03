
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // ^^^^^^ do not touch this code ^^^^^^
}
// all my code goes here down 


//  need to prompt users how long they would like password to be
// need an alert for if the user inputs incorrect amount length of password
// need a var for characters
// what type of characters
// special,number,upper,lower
// window.confirm    confirming what user picked

// to use answers to make password
// need vars that include all possible characters
// separate vars for each type
// need if statements to decide what to do if user selects yes or no to characters



// return password;




generateBtn.addEventListener("click", writePassword);

var password = "";

var passwordLength = function () {
  // this function is allowing me to ask the user how long do they want there password to be
  // as well as putting in an alert if the user chooses an incorrect length using alert
  var lengthPass = prompt("Enter Length of New Password. Must Be Between 8 and 128 Characters Long.");

  if (lengthPass < 8 || lengthPass > 128 || lengthPass === "") {
    alert("Invalid Entry. Password Must Be Between 8 and 128 Characters.")

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
  //this will determine my character sets , had to research a good bit of this 
  // as we didnt touch on the math.floor or math.random 
  var passwordInclusions = charaInclusions();
  var passwordInclusionsLength = passwordInclusions.length;

  for (var i = 0; i < lengthPassword; i++) {
    password += passwordInclusions.charAt(Math.floor(Math.random() * passwordInclusionsLength));
  }

  return password;
};

// this is going to determine what characters the password will be
// note for myself that had had trouble with "" and to ask the teacher. i think i understand now it means that if nothing is assigned to  example : passwordInclusions 
// that it will default to blank ( empty) unless characters are added to it example : passwordInclusions taking var lowercase into the equation... i think...ASK TUESDAY !!!
var charaInclusions = function () {
  var passwordInclusions = "";

  //all possible characters for unique password
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  // copied this last var from online, couldnt type it without vs code getting mad . need to ask question about it and find out why
  var specialChara = "~`!@#$%^&*+<?/;:(=)|{";

  //this will ask the user what characters they want to be in there password
  // removed the window. and code still worked - would like to ask teacher why just confirm works and not window.confirm?
  var confirmLower = window.confirm("Include Lower Case Characters?");
  var confirmUpper = window.confirm("Include Upper Case Characters");
  var confirmNumber = window.confirm("Include Numbers?");
  var confirmSpecial = window.confirm("Include Special Characters?");

  //this will confirm that whatever the user selected is actually going to be in the new password
  if (confirmLower == true) {
    passwordInclusions += lowerCase;
  }
  if (confirmUpper == true) {
    passwordInclusions += upperCase;
  }
  if (confirmNumber == true) {
    passwordInclusions += numbers;
  }
  if (confirmSpecial == true) {
    passwordInclusions += specialChara;
  }

  //return users new password in text box
  return passwordInclusions;
}











