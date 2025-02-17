export function helloWorld() {
    console.log("---------------------------------------------------")
    console.log("Hello World!")
}

export function wakeupCode() {
    console.log("---------------------------------------------------")
    console.log("Just woken up!")

    var someObject = {
        email: "temp@gmail.com",
        name: "temp",
        password: "temp123"
    }

    console.log(someObject)

    var array = [];

    function generateArray(size) {
        function modEachElement(value, modSize) {
            return value % modSize;
        }
        
        for (let i = 0; i < size; i++) {
            array[i] = Math.round(Math.random() * 100);
        }
        
        return function(modSize) {
            return array.map(value => modEachElement(value, modSize));
        }
    }

    console.log(generateArray(8)(5));
}

//TODO: Exercise to format current DATE in dd/mm/yyyy in JavaScript.
// This exercise returns the DATE using the Date() method in javascript.
export function dateFormat() {
    let date = new Date();
    let day = date.getDate() + 1;
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    console.log(`${day}/${month}/${year}`)
    return `${day}/${month}/${year}`;
}

//TODO: Exercise to replace every character in a string with the next character in the alphabet.
// This code returns a string with each character being the next in the alaphbet using the,
// String.fromCharCode() function to get the character from ASCII value,
// charCodeAt() function to get the ASCII value of the character,
// Map function applies the method to each value in the array, in this case is the string.
// Join function concatenates the characters into a string.
export function nextCharacter(name) {
    let temp = name.split("").map(char => String.fromCharCode(char.charCodeAt() + 1)).join("");
    console.log(name + " " + temp)
    return temp;
}

//TODO: Exercise to get the extension of a file(string).
export function getExtenstion(name){
    let extension = name.slice(name.lastIndexOf("."))
    console.log(extension)
    return extension;
}

//TODO: Exercise to add "New!" to the beginning of a string. 
//If the string begins with "New!" then return the original String;
// .indexOf() gets the index of the string given in a string,
// such as in this code the string "New!" is checked to see if it starts at index 0
export function addingString(name){
    if (name.indexOf("New!") === 0) {
        console.log(name);
        return name;
    }else {
        let temp = `New!${name}`;
        console.log(temp)
        return temp;
    }

}
//TODO: Exercise to count the vowels in a string.

export function countVowels(str) {
	let count = 0;
    for (let i = 0; i < str.length; i++) {
        let character = str.charAt(i);
        if(character == "a" || character == "e" || character == "i" || character == "o" || character === "u"){count++}
    }
	return count
}
//TODO: Exercise duplicating characters in a string.
// Splitting the string,
// then mapping each character in the string with a condition
// then Joining the characters back to a string.
export function doubleChar(str) {
	let doubleString = str.split("").map(char => char+=char).join("")
    console.log(doubleString)
	return doubleString;
}

//TODO: Exercise finding first odd number in an array
export function findFirstOdd(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element= arr[i];
        if (arr[i]%2 == 1) {
            return arr[i];
        }
    }
    return false;
}

//TODO: return biggest and smallest value from an array
// Using the Math.max and Math.min functions to find the min and max of an array.
export function findBiggestAndSmallest(arr) {
    let biggest = Math.max.apply(null, arr);
    let smallest = Math.min.apply(null, arr);
    return `biggest: ${biggest} & smallest: ${smallest}`
}

//TODO: Sum of integers up until value given.
export function addUp(val){
    let sum = 0;
    for (let i = 0; i <= val; i++) {
        sum += i;
    }
    return sum;
}

//TODO: Return true if the two values are same type and same value
export function isSameNum(x, y) {
    if (x === y) {
        return true;
    } else {
        return false;
    }
}

//TODO: using the && logic operator
export function and(x,y){
    return x && y;
}

// TODO: sorting an array of strings by length
export function sortByLength(arr) {
    let temp = arr.sort((a, b) => a.length - b.length);
    console.log(temp);
    return temp;
}

//TODO: La Fosse Boat Trip
// Journeys up to 5 minutes long have a flat rate cost of £5
// Every minute after the first 5 will cost an extra 80p
// The length of the jounrey is always rounded up to a whole number of minutes 

//The boatFare function should take a number representing the length of a boat journey in seconds, 
// and return a number representing the cost of that jounrey in pence.

export function boatFare(num) {
    let journeyinMin = Math.ceil(num/60);
    let cost  = 5;
    if (journeyinMin > 5){
        cost = 5 + ((journeyinMin - 5) * 0.8);
    }

    return cost * 100;
}

//TODO: La Fosse Emails
// Write a function checkEmails, 
// which takes in a string of a sentence and returns true if the string includes an integer, 
// and false if the string does not include an integer.

export function checkEmails(sentence) {
    if (sentence.search(/\d/) === -1) { // Do not need to surrond regex in quotes.
        return false;
    } else {
        return true;
    }
}
