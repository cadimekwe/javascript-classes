console.log('Hello World');
// prints Hello World
let number = 100;
number = number + 10;
number += 10;
console.log(number);
console.log('hi' + 'ya');
console.log('front  ' + 'space');
console.log('My name is chidimma'.length);
console.log('hello'.toUpperCase());
console.log('Chidims'.startsWith('p'));
let name = 'Ebuks the daddy';
console.log(name);
name = 'local government';
console.log(name);

//Number Exercise 1 
let age = 27;
console.log(age);

//Number Exercise 2
let numberOfRabbits = 2;
numberOfRabbits = 3 * 2;
console.log(numberOfRabbits);

//Number Exercise 3
let bodmasExample = 3;
bodmasExample = bodmasExample + 5 / 6;
console.log(bodmasExample);

//Number Exercise 4
let randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber);

let firstName = 'CHIDIMMA ';
console.log(firstName.toLocaleLowerCase());
let lastName = 'adimekwe';
console.log(lastName.toUpperCase());
console.log(firstName + lastName.toUpperCase());


// concatination
let message = 'Welcome ';
let message2 = 'Home';
let addition = message + message2;
console.log(addition);

//length property
let messageLength = firstName.length;
console.log(messageLength);

//template literals
let email = "chidimmadimekwe@gmail.com";
console.log(`my email address is ${email}`);

//include- string method to check if a value exist in a text
const country = 'united kingdom';
const doesItExist = country.includes('united');
// Replace- replaces a text in a string
const replaceText = country.replace('kingdom', 'states');
console.log(replaceText);
console.log(country);

// String Exercise 1
let myCountry = 'Nigeria';
console.log(myCountry);

// String Exercise 2
console.log(myCountry.length);

// String Exercise 3
const favouriteFood = 'chidimma';
console.log(favouriteFood.toUpperCase());

// string exercise 4
console.log(favouriteFood.toLocaleLowerCase());

// string exercise 5
let middleName = 'ursula';
let myAge = 27;
let myMessage = 'what is your name? ' + 'hello, my name is ' + middleName + ' and i am ' + myAge  + ' years old';
console.log(myMessage);

// string exercise 6
const firstName2 = 'chisomnazu';
const lastName2 = 'adimekwe';
console.log(`my sisters name is ${firstName2} ${lastName2}`);
console.log(`Welcome ${firstName2} ${lastName2} How can i help you?`);

// BOOLEAN
let surname2 = 'adimekwe';
let age2 = '27';
let amIYoung = true; 

// if, else and else if statements- used to compare
if (age <= 9) {
    console.log('I am 10 years old');
} else {
    console.log('I am not 10 years old');
}
// === equals
// > greaterThan
// < lessThan
// >= greater or equals to
// <= less than or equals to
// || OR
// && AND
// && = 2 or more statements have to be true
// || = if one is true then the condition is met
// != not equal
// !== not equal value or not equal type

let age3 = 27;
if (age3 <= 10) {
    console.log('i am less than 27 years old');
} else if (age3 === 27){
    console.log('i am 27 years old');
} else {
    console.log('i am greater than 27');
}

if (age3 > 0 && age <= 10) {
    console.log('i am a child');
} else if (age3 > 10 && age <= 15) {
    console.log('i am a minor');
} else if (age3  > 30 || age <= 26) {
    console.log('i am an adult');
} else {
    console.log('i am almost 30');
}

// switch statements- used to check for something
switch (age3) {
    case 27:
        console.log('i am almost 30');
        break;
    case 20:
        console.log('i am less than 30');
        break;
    case 25:
        console.log('i am exactly 25');
        break;
// default means if none of the conditions are met do this
    default:  
    console.log('i am a grandma');
        break;
}

// control flow exercise 1
const password = 'raymond redddington';
if (password.length < 7) {
    console.log('true');
} else {
    console.log('false');
}

// control flow exercise 2
let superDooperLooperRollerCoaster = 140;
if (typeof superDooperLooperRollerCoaster !== 'number') {
    console.log('please enter a number');
} else if (superDooperLooperRollerCoaster >= 150) {
    console.log('you can go on a ride');
} else {
    console.log('sorry you are not tall enough');
}

// If statement project: Dize Prize
