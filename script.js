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
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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
function generatePassword() {
  selectPasswordLength = prompt("How long would you like your password to be?  Please choose between 8-128 characters...");
  console.log("Select password length" + selectPasswordLength);

if (!selectPasswordLength){
  alert("Select the Generate Password Button");

//password cant be length less than 8 or greater than 128)
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
// if no password variables are selected/false
if (!selectLowerCase && !selectUpperCase && !selectNumber && !selectSpecialChar){
  selectChoices = alert("Please choose criteria to create password!");
 // All variables are selected/true
}else if (selectLowerCase && selectUpperCase && selectNumber && selectSpecialChar){
  //combine the arrays for lowercase, uppercase, numbers, and special characters
  selectChoices = lowerCase.concat(upperCase, numbers, specialChar);
  console.log(selectChoices);
}
// 3 of the password variables are selected/ true
else if (selectLowerCase && selectUpperCase && selectNumber){
  selectChoices = lowerCase.concat(upperCase, numbers);
  console.log(selectChoices);
}
else if (selectLowerCase && selectUpperCase && selectSpecialChar){
  selectChoices = lowerCase.concat(upperCase, specialChar);
  console.log(selectChoices);
}
else if (selectLowerCase && selectNumber && selectSpecialChar){
  selectChoices = lowerCase.concat(numbers, specialChar);
  console.log(selectChoices);
}
else if (selectUpperCase && selectNumber && selectSpecialChar){
  selectChoices = upperCase.concat(numbers, specialChar);
  console.log(selectChoices);
}

// 2 of the password variables are selected/ true

else if (selectLowerCase && selectUpperCase){
  selectChoices = lowerCase.concat(upperCase);
  console.log(selectChoices);
}
else if (selectLowerCase && selectNumber){
  selectChoices = lowerCase.concat(numbers);
  console.log(selectChoices);
}
else if (selectLowerCase && selectSpecialChar){
  selectChoices = lowerCase.concat(specialChar);
}
else if (selectUpperCase && selectNumber){
  selectChoices = upperCase.concat(numbers);
  console.log(selectChoices);
}
else if (selectUpperCase && selectSpecialChar){
  selectChoices = upperCase.concat(specialChar);
  console.log(selectChoices);
}
else if (selectNumber && selectSpecialChar){
  selectChoices = numbers.concat(specialChar);
  console.log(selectChoices);
}

// 1 of the password variables are selected / true

else if (selectLowerCase){
  selectChoices = lowerCase;
  console.log(selectChoices);
}
else if (selectUpperCase){
  selectChoices = upperCase;
  console.log(selectChoices);
}
else if (selectSpecialChar){
  selectChoices = specialChar
  console.log(selectChoices);
}
else if (selectNumber){
  selectChoices = numbers;
  console.log(selectChoices);
} 

//assign empty variable for the length of the password
var blankPassword = [];

//for loop to create random passwords with variables selected
for (var i = 0;  i < selectPasswordLength; i++){
  var allChoices = selectChoices[Math.floor(Math.random() * selectChoices.length)];
  blankPassword.push(allChoices);
  console.log(allChoices);
}

//join and return password
var password = blankPassword.join("");
console.log("Your password is: " + password);
return password;

}

//create function to copy password
//credit code snippet from https://stackoverflow.com/questions/37658524/copying-text-of-textarea-in-clipboard-when-button-is-clicked/37659356
function copy () {
  var textArea = document.getElementById("password");
  password.select();
  document.execCommand("copy");
}