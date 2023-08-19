// 1. Create a function that takes a string as a parameter and returns the string with the first character of each word changed into a capital letter, as in the example below. Test it with different strings.

function ucFirstLetters(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
};

function ucFirstLetters2(str) {
  if (!str) {
    return ""
  }
  return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
};

console.log('---Q1---')
console.log(ucFirstLetters('los angeles'));
console.log(ucFirstLetters2('nEw zEaland'));



// 2. Create a function truncate(str, max) that truncates a given string of text if its total length is greater than the max length. It should return either the truncated text, with an ellipsis (...) added to the end if it was too long, or the original text otherwise.
let str = 'This text will be truncated if it is too long';
let truncate = str.slice(0, 20) + '...';

console.log('---Q2---')
console.log(truncate);

// b) Write another variant of the truncate function that uses a conditional operator.
function truncateOp(str, length) {
  if (str.length > length) {
    return str.slice(0, length) + '...';
  };
}
console.log(truncateOp('This text will be truncated if it is too long', 25));

// 3. Use the following animals array for the below tasks. Test each one by printing the result to the console.
let animals = ['Tiger', 'Giraffe']

// a) Add 2 new values to the end
animals.push('Polar Bear', 'Baboon')

// b) Add 2 new values to the beginning
animals.unshift('Panda', 'Deer')

// c) Sort the values alphabetically
animals.sort();

console.log('---Q3---')
console.log(animals)

// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue
replaceMiddleAnimal = [...animals];
replaceMiddleAnimal[3] = 'Meerkat';

//replaceMiddleAnimal[replaceMiddleAnimal.length -2] = 'Meerkat';
console.log(replaceMiddleAnimal)

// e) Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string. Try to make it work regardless of upper/lower case.

function findMatchingAnimals(arr, beginsWith) {
  return arr.filter((el) => el.toLowerCase().includes(beginsWith.toLowerCase()));
};

console.log(findMatchingAnimals(animals, 'P'));



//4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'. The function should remove all dashes, and uppercase the first letter of each word after a dash.

let str2 = 'margin-left'
let noSpecialChars = str2.replace('-l', 'L');

//Attempt one above

function camelCase(cssProp) {
  let words = cssProp.split('-');
  const camelCasedProp = words.reduce((result, word, index) => {
      if (index === 0) {
          return word;
      }
      return result + word.charAt(0).toUpperCase() + word.slice(1);
  }, '');

  return camelCasedProp;

};

console.log('---4---')
console.log(noSpecialChars) // marginLeft
console.log(camelCase('margin-left'))


// b) Create variants of the camelCase function that use different types of for loops, and console.log(camelCase('background-image')) // backgroundImage

function camelCaseLoop(cssProp2) {
  let words = cssProp2.split('-');  
  let camelCasedProp2 = words[0];

    for (let i = 1; i < words.length; i++) {
        camelCasedProp2 += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  return camelCasedProp2;
}

console.log(camelCaseLoop('background-image')) // backgroundImage

// c) with and without the conditional operator.console.log(camelCase('display')) // display