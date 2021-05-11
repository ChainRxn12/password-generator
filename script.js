// Assignment Code
var generateBtn = document.querySelector("#generate");

//assigning variables for password generator
var selectPasswordLength;
var selectLowerCase;
var selectUpperCase;
var selectNumber;
var selectSpecialChar;

//creating arrays with variables with console logs
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  console.log(lowerCase);
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  console.log(upperCase);
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(numbers);
var specialChar = [" ", "!", "", "#", "$", "%", "&", "'", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "~", "{", "}", "|"];
  console.log(specialChar);



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//beginning of prompts
function generatePassword(){
  selectPasswordLength = prompt("How long would you like your password to be?  Please choose between 8-128 characters...");
} console.log("Select password length" + selectPasswordLength);

if (!selectPasswordLength){
  alert("Please Enter a Value");
}