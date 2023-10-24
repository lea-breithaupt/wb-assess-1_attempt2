// Return the quotient of x and y.
// Ex.:
//   divide(10, 2);
//   => 5
function divide(x, y) {
  return x/y
}

// Return the average of x and y.
// Here, the average of x and y is the *mean* of x and y. In other words, it's
// computed by dividing the sum of x and y by 2.
// Ex.:
//   average(10, 2);
//   => 6
function average(x, y) {
  return ((x+y) / 2)
}

// Return true if x and y are mostly equivalent up to a tolerance of 0.001.
// In other words, return true if the aboslute value of x - y is less than 0.001.
// Ex.:
//   approximatelyEqual(10.001, 10);
//   => true
function approximatelyEqual(x, y) {
  if(x-y <= 0.001) {
    return true
  }
}

// Given a first name and last name, return a full name in the format "FIRST LAST"
// Ex.:
//   fullName('John', 'Doe');
//   => 'John Doe'
function fullName(firstName, lastName) {
  let newName = (`${firstName} ${lastName}`)
  return newName
}

// Generate the sentence "PERSON was drinking BEVERAGE at LOCATION" using the
// person, beverage and location provided.
// Ex.:
//   generateSentence('Kay', 'coffee', 'the local cafe');
//   => 'Kay was drinking coffee at the local cafe.'
function generateSentence(person, beverage, location) {
  let sentence = (`${person} was drinking ${beverage} at ${location}.`)
  return sentence
}

// Return the given string with all vowels replced with '*' characters.
// Ex.:
//   censorVowels('javascript');
//   => 'j*v*scr*pt'
function censorVowels(string) {
  let censoredString = string.replace(/[aeiou]/gi, '*')
  return censoredString
}

// Return the given string in sticky case.
// Ex.:
//   stickyCase('hello world');
//   => 'hElLo wOrLd'
function stickyCase(string){
  let arr = string.split('')
  let arr2 = []
  for(let i = 0; i < arr.length; i++){
    if(i %2 === 0){
      arr2.push(arr[i])
    } else {
      arr2.push(arr[i].toUpperCase())
    }
  }
  return arr2.join('')
}

// Return the given string in leetspeak. Leetspeak is a modified version of
// English where characters are replaced by numbers or symbols. For this
// version of leetspeak, replace the following characters:
//   a => 4
//   e => 3
//   i => 1
//   o => 0
//   s => 5
//   t => 7
// Ex.:
//   leetspeak('javascript');
//   => 'j4v45cr1p7'

function leetspeak(string) {
  let stringArr = string.split('')
  for(let i = 0; i < stringArr.length; i++) {
    if(stringArr[i] === 'a') {
      stringArr[i] = '4'
    } if(stringArr[i] === 'e') {
      stringArr[i] = '3'
    } if(stringArr[i] === 'i') {
      stringArr[i] = '1'
    } if(stringArr[i] === 'o') {
      stringArr[i] = '0'
    } if(stringArr[i] === 's') {
      stringArr[i] = '5'
    } if(stringArr[i] === 't') {
      stringArr[i] = '7'
    }
  } return stringArr.join('')
}

export {
  approximatelyEqual,
  average,
  censorVowels,
  divide,
  fullName,
  generateSentence,
  leetspeak,
  stickyCase,
};
