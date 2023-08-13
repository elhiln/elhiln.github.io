//1
"" + 1 + 0  //10
"" - 1 + 0  //-1
true + false //1
!true //false
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2 //NaN
" -9 " + 5 //-9 5
" -9 " - 5 //-14
null + 1 //1
undefined + 1 //NaN
undefined == null //true
undefined === null //false
" \t \n" - 2  //-2 


// 2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?
let three = "3";
let four = "4";
let thirty = "30";

//what is the value of the following expressions?
let addition = three + four //"34"
let multiplication = three * four //"12"
let division = three / four //"0.75"
let subtraction = three - four //"-1"
let lessThan1 = three < four //"true"
let lessThan2 = thirty < four //"false"



//3. Which of the following console.log messages will print? Why?
if (0) console.log('#1 zero is true')
if ("0") console.log('#2 zero is true') //Zero is true
if (null) console.log('null is true')
if (-1) console.log('negative is true') //negative is true
if (1) console.log('positive is true') //positive is true



// 4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?

let a = 2, b = 3;
let result = `${a} + ${b} is `;

if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}
// console.log(result ? result += 'less than 10' : result += 'greater than 10')



// 5. Rewrite the following function using: 
// a) function expression syntax, and

const getGreeting = function (name) {
   return 'Hello ' + name + '!';
};

// console.log(getGreeting('Nouran'));

// b) arrow function syntax. Test each version to make sure they work the same.

const arrowGreeting = (name) => 'Hello ' + name + '!';

// console.log(arrowGreeting('Nouran'));



// 6. a) Complete the inigo object by adding a lastName property and including it in the
// greeting.
// b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
// prints his famous catch phrase to the console. HINT: see
// https://www.imdb.com/title/tt0093779/characters/nm0001597.
// c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

const westley = {
    name: 'Westley',
    numFingers: 5
}
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}
const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
//console.log(greeting + this.getCatchPhrase(person));
},

   getCatchPhrase(person) {
      if (person.numFingers === 6) {
         return 'You killed my father. Prepare to die.';
      }
      return 'Nice to meet you.';
   },

   getCatchPhrase: (person) =>
      person.numFingers === 6 ? "You killed my father. Prepare to die." : "Nice to meet you.",
}

inigo.greeting(westley);
inigo.greeting(rugen);



// 7. The following object represents a basketball game and keeps track of the score as the game progresses.

//a Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works
const basketballGame = {
   score: 0,
   fouls: 0,
   freeThrow: function () {
     this.score++;
     return this;
   },
   basket: function () {
     this.score += 2;
     return this;
   },
   threePointer: function () {
     this.score += 3;
     return this;
   },

   //c Add a new object property to keep track of the number of fouls and a method to increment it, similar but separate to the score. Include the foul count in the half time and full time console messages

   makeAFouls:function(){
     this.fouls++;
     return this;
   },
   halfTime: function () {
     console.log ("Halftime score is " + this.score + ' And yours Fouls are: ' + this.fouls );
     return this;
   },
   //b Add a new method to print the full time final score
   fullTime: function () {
      console.log("FullTime score is " + this.score + ' And yours Fouls are: ' + this.fouls);
      return this;
   },
 };
 //d modify each of the above object methods to enable function chaining as below:

 //console.log(basketballGame.basket().freeThrow());
 basketballGame
   .basket()
   .freeThrow()
   .freeThrow()
   .makeAFouls()
   .basket()
   .threePointer()
   .halfTime()
   .basket()
   .makeAFouls()
   .freeThrow()
   .makeAFouls()
   .freeThrow()
   .fullTime();


// 8. The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for...in loop to access and print to the console each of those object properties and their values. Test it using the sydney object below.

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

/*for (let key in sydney) {
    console.log('key: ' + key);
    console.log('value: ' + sydney[key]);
}*/

// b) Create a new object for a different city with different properties and call your function again with the new object.

const cityClone = {...sydney, name: 'Melbourne'};
// console.log(cityClone);


// 9. Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = teamSports

teamSports.push('football')
teamSports.unshift('football')
// console.log(moreSports);


// b) Create a new dog2 variable equal to dog1 and give it a new value
   let dog1 = 'Bingo';
   let dog2 = dog1;
   dog2 = 'Blinky';

// console.log(dog2); 

// c) Create a new cat2 variable equal to cat1 and change its name property
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = {...cat1, name: 'Whiskers'};

//console.log(cat2);

// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
// changed? Why?
console.log(teamSports);
console.log(dog1);
console.log(cat1);
//No they have not changed, because they are a reference of the object


// e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent

console.log('moreSports',moreSports);
console.log('cat2: ', cat2);


// 10. The following constructor function creates a new Person object with the given name and age values.

function Person(name, age) {
   this.name = name;
   this.age = age;
   this.human = true;
   this.canDrive = function () {
      return this.age >= 18;
   };
}

// a) Create a new person using the constructor function and store it in a variable
const person1 = new Person("Hercules", 17);

// b) Create a second person using different name and age values and store it in a separate variable
const person2 = new Person("Athena", 35);

// c) Print out the properties of each person object to the console
console.log("Person 1:", person1);
console.log("Person 2:", person2);

// d) Rewrite the constructor function as a class called PersonClass and use it to create a third person using different name and age values. Print it to the console as well.

class PersonClass {
   constructor(name, age) {
     this.name = name;
     this.age = age;
     this.human = false;
   }
   canDrive() {
      return this.age >= 18;
    }
 }
 
 const person3 = new PersonClass("Hades", 108);
 console.log("Person 3:", person3);

// e) Add a canDrive method to both the constructor function and the class that returns true if the person is old enough to drive.

console.log(person1.canDrive());
console.log(person2.canDrive());
console.log(person3.canDrive());