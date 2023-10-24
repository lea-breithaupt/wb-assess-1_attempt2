// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]

function greaterThanTen(numbers) {
// Step 1: create empty array
// Step 2: loop through numbers array
// Step 3: if that index of number is greater than 10, push it to the empty array
// Step 4: return new array
  let arr = []
  for(let i=0; i < numbers.length; i++) {
    if(numbers[i] > 10) {
      arr.push(numbers[i])
    }
  } return arr
}

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]

function bWords(words) {
// Step 1: create empty array
// Step 2: loop through words array
// Step 3: if each index of words startsWith 'b', push(add) to new array
// Step 4: if each index of words startsWith 'B', push(add) to new array
// Step 5: return array with words that start w/ 'b' or 'B'
  let bWordsArr = []
  for (let i = 0; i < words.length; i++) {
    if(words[i].startsWith('b')) {
      bWordsArr.push(words[i])
    } if(words[i].startsWith('B')) {
      bWordsArr.push(words[i])
    }
  } return bWordsArr
}

// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]

function extend(originalArray, additionalItems) {
  let extendedArr = originalArray.concat(additionalItems)
  return extendedArr
}

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']

function itemsWithLength(items, length) {
  // Step 1: create empty arr
  // Step 2: use a for loop to loop through items array
  // Step 3: if items length = 3 then push(add) to empty arr
  // Step 4: return new arr
  let itemsOfThreeArr = []
  for(let i=0; i < items.length; i++) {
    if(items[i].length === length) {
      itemsOfThreeArr.push(items[i])
    }
  } return itemsOfThreeArr
}

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']

function everyOtherItem(items) {
  // Step 1: create a new array
  // Step 2: loop through array 
  // Step 3: push to new array
  // Step 4: return new array
  let everyOtherArr = []
  for(let i=0; i < items.length; i +=2) {
    let item = items[i]
    everyOtherArr.push(item)
  } return everyOtherArr
}

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]

function findWordsStartingWith(words, letter) {
  // Step 1: create a new array
  // Step 2: loop through array
  // Step 3: if the word at each index starts with the letter given,
  // return the index of that word in the array
  // Step 4: push(add) the index of that word to the new array
  // Step 5: return the new array
  let indexArr = []
  for(let i=0; i < words.length; i++) {
    if(words[i].startsWith(letter)) {
      words.indexOf(words[i])
      indexArr.push(words.indexOf(words[i]))
    }
  } return indexArr
}

// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]

function smallestNItems(items, n) {
  // Step 1: create a variable to sort the items in the array
  // Step 2: return the variable, with the slice and reverse method
  let smallestItems = items.sort((a,b) => a-b)
  return smallestItems.slice(0,n).reverse()
}

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2

function findIndex(items, value) {
  let idx = items.indexOf(value)
  return idx
}

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]

function range(start, stop) {
  let rangeArr = []
  for(let i=start; i <= stop; i++) {
    rangeArr.push(i)
  } return rangeArr
}

export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
