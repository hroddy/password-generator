// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

  var thePassword = "";
  var passwordLength = 0;
  var optionLowercase = false;
  var optionUppercase = false;
  var optionNumeric = false;
  var optionSpecial = false;

  //ask about length of password
  passwordLength = prompt("How many characters does your password need? Please select a number between 8 and 128.");

  //check that password is right length
  if (passwordLength === "" || passwordLength === null || passwordLength >= 128 || passwordLength <= 8) {
    prompt("Whoops, that wasn't a valid response. Please pick a number between 8 and 128.")
    generatePassword();
  } else {
    return optionChecklist();
  };

  function optionChecklist() {

    //ask about lowercase letters
    optionLowercase = confirm("Should we use lower case letters in your password?");

    //ask about uppercase letters
    optionUppercase = confirm("Should we use uppercase letters in your password?");

    //ask about numeric chars
    optionNumeric = confirm("Should we use numbers in your password?");

    //ask about special chars
    optionSpecial = confirm("Should we use special characters (!@#$) in your password?");

    return thePassword = createPassword(passwordLength, optionLowercase, optionUppercase, optionNumeric, optionSpecial);

  };

  if (optionLowercase === false && optionUppercase === false && optionNumeric === false && optionSpecial === false) {
    prompt("Sorry, we can't make a password with nothing... please select at least one of these options.")
    optionChecklist();
  };

}

function createPassword(passwordLength, optionLowercase, optionUppercase, optionNumeric, optionSpecial) {
  
  var finishedPassword = "";

  var optionArray = []

  //passwordOptions:
  if (optionLowercase === true) {
    var lowerSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    optionArray.push(lowerSet);
  };

  if (optionUppercase === true) {
    var upperSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    optionArray.push(upperSet);
  };

  if (optionNumeric === true) {
    var numericSet = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    optionArray.push(numericSet);
  };

  if (optionSpecial === true) {
    var specialSet = ["&","!", "@", "#", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "-", "_"];
    optionArray.push(specialSet);
  };

  for(var i = 0; i < passwordLength; i++) {
    
    var subArrayLength = optionArray[Math.floor(Math.random() * optionArray.length)]
    console.log(subArrayLength);
    finishedPassword += subArrayLength[Math.floor(Math.random() * subArrayLength.length)]

  }

  return finishedPassword;

}