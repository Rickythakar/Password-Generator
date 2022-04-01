// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Prompt the user for the password criteria 
//Function for generatePassword written below
function generatePassword() {
var pwArray = []
var passwordlength = prompt ("Please enter desired password lenght between 8 and 128 characters")
//Criteria - Lenght of generated passsword is atleast 8 characters and no more than 128 characters.
if (isNaN(passwordlength) || passwordlength < 8 || passwordlength > 128) {
  alert ("Length must be at least 8 characters and no more than 128 characters");
  generatePassword()
}
//Criteria - Option to include uppercase, lowercase, numeric, and/or special characters.

//variable that will pull from special characters
var specialCharacters = confirm ("Click confirm for special characters")
if (specialCharacters) {
  //function that will pull from array of special characters
  pwArray = pwArray.concat(specialChars)
}

//variable for the number characters
var numberCharacters = confirm ("Click confirm to include number characters")
if (numberCharacters) {
  //function that will pull from array of number characters
pwArray = pwArray.concat(numberChars)
}

//variable that will pull from uppercase characters
var upperCharacters = confirm ("Click confirm to include uppercase characters")
if (upperCharacters) {
  //function that will pull from array of uppercase characters
pwArray = pwArray.concat(uppercase)
}

//variable that will pull from lowercase characters
var lowerCharacters = confirm ("Click confirm to include lowercase characters")
if (lowerCharacters) {
pwArray = pwArray.concat(lowercase)
}

//Variable name for created password that gets generated is createdpw
var createdpw = "";
for (let index = 0; index < passwordlength; index++) {
createdpw += pwArray[Math.floor(Math.random() * pwArray.length)];
}
//The line below gives the user the generated password if the application is used correctly
return createdpw
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//Thank you taking your time to read this code. 