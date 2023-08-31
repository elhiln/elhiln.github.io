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

console.log('\n---Q2---')
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

console.log('\n---Q3---')
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

console.log('\n---4---')
console.log(noSpecialChars) // marginLeft
console.log(camelCase('margin-left'))


// b) Create variants of the camelCase function that use different types of for loops

function camelCaseLoop(cssProp2) {
  let words = cssProp2.split('-');  
  let camelCasedProp2 = words[0];

    for (let i = 1; i < words.length; i++) {
        camelCasedProp2 += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  return camelCasedProp2;
}

console.log(camelCaseLoop('background-image')) // backgroundImage

// c) with and without the conditional operator

function camelCaseWithConditional(cssProp) {
  const words = cssProp.split('-');
  let camelCasedProp = words[0];

  for (let i = 1; i < words.length; i++) {
      camelCasedProp += (i === 0 ? words[i] : words[i].charAt(0).toUpperCase() + words[i].slice(1));
  }

  return camelCasedProp;
}
console.log(camelCase('display')) // display


// 5. Decimal number operations in JavaScript can lead to unexpected results, as in the following:
let twentyCents = 0.20
let tenCents = 0.10

console.log('\n---5---')
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);

console.log(fixedTwenty + fixedTen)

// a) Explain why the above code returns the wrong answer


// b) Create a function currencyAddition(float1, float2) which safely adds the two decimal numbers float1 and float2 and returns the correct float result.

// c) Create a function currencyOperation(float1, float2, operation) which safely performs the given operation (either +, -, / or *) on the two numbers and returns the correct float result.

// d) (Extension) Extend the above function to include a fourth argument numDecimals which allows the operation to support different amounts of decimal places from 1 to 10.

let animal = { eats: true, sleeps: true, legs: 4, mammal: true }; // inherits from Object prototype

let rabbit1 = { jumps: true };
Object.setPrototypeOf(rabbit1, animal); // NEW recommended way, uses default property descriptor settings
let rabbit2 = Object.create(animal, { // creates a new object from prototype, with custom properties
jumps: { // name of custom 'own' property for rabbit object
value: true, // property descriptor to set the property value
enumerable: true // property descriptor to make this enumerable - otherwise jumps not in for...in
}
});
console.log(rabbit1, rabbit2) // { jumps: true } - only prints 'own' properties, not inherited ones
console.log(rabbit1.legs, rabbit2.legs) // 4 - inherited properties do exist
for (let prop in rabbit1) console.log(`${prop} is ${rabbit1[prop]}`) // own properties, then inherited ones
for (let prop in rabbit2) console.log(`${prop} is ${rabbit2[prop]}`) // own properties, then inherited ones