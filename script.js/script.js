// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



//Function for generatePassword written below
function generatePassword() {
console.log("Clicked on Generate Password button")
// Console log created for information that the Generate password button is responsive to jss file
//Prompt the user for the password criteria 
//Criteria - Lenght of generated passsword is atleast 8 characters and no more than 128 characters.

var passwordlenght=prompt ("Please enter desired password lenght between 8 and 128 characters")
if (isNaN(passwordlenght) || passwordlenght > 8 || passwordlenght < 128);{
alert ("Lenght must be at least 8 characters and no more than 128 characters");
return null;
}

//Criteria - Option to include uppercase, lowercase, numeric, and/or special characters.
var specialChars = confirm ("Click confirm for special characters")
var numberChars = confirm ("Click confirm to include number characters")
var uppercase = confirm ("Click confirm to include uppercase characters")
var lowercase = confirm ("Click confirm to include lowercase characters")










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
