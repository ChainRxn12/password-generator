// Assignment Code
var generateBtn = document.querySelector("#generate");

//assigning variables for password generator
var selectPasswordLength;
var selectLowerCase;
var selectUpperCase;
var selectNumber;
var selectSpecialChar;
var selectChoices;

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
  alert("Select the Generate Password Button");

//password must be length less than 8 or greater than 128)
} else if (selectPasswordLength < 8 || selectPasswordLength > 128){
  selectPasswordLength = prompt ("Choose between 8 and 128");
  console.log("Password length" + selectPasswordLength);


  //select lowercase, uppercase, special characters, and numbers
} else {
  selectLowerCase = confirm("Do you want to add lower case letters to your password?");
  console.log("Lower Case Letters " + selectLowerCase);
  selectUpperCase = confirm("Do you want to add upper case letters to your password?");
  console.log("Upper Case Letters " + selectUpperCase);
  selectNumber = confirm("Do you want to add numbers to your password?");
  console.log("Numbers" + selectNumber);
  selectSpecialChar = confirm("Do you want to add special characters to your password?");
  console.log("Special Characters" + selectSpecialChar);
  
};
// if no variables are selected/false
if (!selectLowerCase && !selectUpperCase && !selectNumber && !selectSpecialChar){
  selectChoices = alert("Please choose criteria to create password!");
 // All variables are selected/true
}else if (selectLowerCase && selectUpperCase && selectNumber && selectSpecialChar){
  //combine the arrays for lowercase, uppercase, numbers, and special characters
  selectChoices = lowerCase.concat(upperCase, numbers, specialChar);
  console.log(selectChoices);
}
// 3 of the variables are selectet/ true
else if (selectLowerCase && selectUpperCase && selectNumber){
  selectChoices = lowerCase.concat(upperCase, numbers);
  console.log(selectChoices);
}
else if (selectLowerCase && selectUpperCase && selectSpecialChar){
  selectChoices = lowerCase.concat(upperCase, specialChar);
  console.log(selectChoices);
}
else if (selectLowerCase && selectUpperCase && selectNumber){
  selectChoices = lowerCase.concat(upperCase, numbers);
  console.log(selectChoices);
}
else if (selectLowerCase && selectUpperCase && selectNumber){
  selectChoices = lowerCase.concat(upperCase, numbers);
  console.log(selectChoices);
}

