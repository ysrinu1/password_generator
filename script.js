// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const lower = "abcdefghijklmnopqrstuvwxyz"
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const nums = "0123456789"
  const specials = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

  let userLength = 0
  let lowerBool = false
  let upperBool = false
  let numsBool = false
  let specialsBool = false
  let charaList = ""
  let cache = ""
  let counter = 0
  let password = ""

  userLength = prompt("Enter a password length between 8 and 128.")

  if ( userLength < 8 || userLength > 128 ) {

    alert("Invalid password length, please try again.")

  } else {

    // password length
    conf = confirm("A password of " + userLength + " characters will be generated after confirming which character types to include.\n\nlowercase: abcdefghijklmnopqrstuvwxyz\nuppercase: ABCDEFGHIJKLMNOPQRSTUVWXYZ\nnumbers: 0123456789\nspecial characters: !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~")

    console.log("user length input: " + userLength)

    // lowercase
    lowerBool = confirm("Include lowercase?")
    console.log("include lowercase: ", lowerBool)

    if ( lowerBool === true ) {
      charaList=(charaList+lower)
      cache = lower.charAt(Math.floor(Math.random() * 26))
      counter++
    }

    // uppercase
    upperBool = confirm("Include uppercase?")
    console.log("include uppercase: ", upperBool)

    if ( upperBool === true ) {
      charaList=(charaList+upper)
      cache = (cache+upper.charAt(Math.floor(Math.random() * 26)))
      counter++
    }

    // numbers
    numsBool = confirm("Include numbers?")
    console.log("include numbers: ", numsBool)

    if ( numsBool === true ) {
      charaList=(charaList+nums)
      cache = (cache+nums.charAt(Math.floor(Math.random() * 10)))
      counter++
    }

    // special characters
    specialsBool = confirm("Include special characters?")
    console.log("include special characters: ", specialsBool)

    if ( specialsBool === true ) {
      charaList=(charaList+specials)
      cache = (cache+specials.charAt(Math.floor(Math.random() * 32)))
      counter++
    }
    
    // no character types selected
    if (charaList === "") {
      alert("You must choose at least one character type, lower, upper, numbers, or special.")
      return
    }

    // all criteria has been met, begin generating password
    // cache ensures at least 1 chara of each selected chara type will be in final generated password
    // counter is the quantity of characters in the cache
    console.log("chara types counter: " + counter)
    console.log("single chara per type cache: " + cache)
    console.log("final character list is: " + charaList)

    // generate a list of characters up to the user requested length minus the (cache) counter
    charaLength = charaList.length;
    for ( let i = 0; i < (userLength-counter); i++ ) {
        password += charaList.charAt(Math.floor(Math.random() * charaLength));
    }

    // combine the initial generated list of characters with the cache characters into a final list
    password = password + cache
    console.log("password + cache, pre-scramble: " + password);

    // shuffle the final list of characters to be the generated password
    // https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
    password = password.split("").sort(function(){return 0.5-Math.random()}).join("");
  
    console.log("generated password is: " + password)

    // alert("Your generated password is: " + password)

  }

  return password

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
