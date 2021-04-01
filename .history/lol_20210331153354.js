// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
const walkInPark = "I can walk in the park all day!"
console.log(walkInPark.slice(18, 22));


// 2. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
const greeting = "Hello World";
console.log(greeting.toUpperCase());


// 3. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console. 
const greetingsFromSpace = "Hello Earthling";
console.log(greetingsFromSpace.toLowerCase());


// 4. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
const programmingLang = "JavaScript";
console.log(programmingLang.slice(3, 6));


// 5. Check if the sentence "nice shoes" contains the letter l or n. 
console.log("nice shoe".includes("l"));
console.log("nice shoe".includes("n"));


// 6. Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB
const givenString = "Given String";
const newString = givenString[0]+ givenString + givenString[11];
console.log(newString);


// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch
const existingString = "Schlesisches Tor";
const newString2 = existingString[0] + existingString[1] + existingString[2] + existingString + existingString[0] + existingString[1] + existingString[2];
console.log(newString2);


// 8. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB
const stringWithAlteredPosition = existingString


// 9. Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher". 
let myName = "Joe";
let myCity = "Berlin";
let myStudies = "Web Development";
console.log(`My name is ${myName}. I live in ${myCity} and I am learning ${myStudies}`);


// 10. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
const = mySentence = "the quick brown fox";
const mySentenceFirstLetterCapitalised = mySentence.charAt(0).toLocaleUpperCase() + mySentence;
console.log(mySentenceFirstLetterCapitalised);