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
if (isNaN(passwordlength) || passwordlength < 8 || passwordlength > 128);{
  alert ("Length must be at least 8 characters and no more than 128 characters");
  generatePassword();
}
//Criteria - Option to include uppercase, lowercase, numeric, and/or special characters.
var specialCharacters = confirm ("Click confirm for special characters")
if (specialCharacters) {
  pwArray = pwArray.concat(specialChars)
}
var numberCharacters = confirm ("Click confirm to include number characters")
var upperCharacters = confirm ("Click confirm to include uppercase characters")
var lowerCharacters = confirm ("Click confirm to include lowercase characters")












//Return option for end product within the textbox of the generated password to let user know that the password has been created.
return "Password Generated below"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
