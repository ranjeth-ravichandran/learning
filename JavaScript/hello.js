console.log("Hello World!")

// ---------------------------------------------------
// INTEGER 

// Radnom Value
const x = Math.random() * 10;
console.log("Random Value: " + x)

// Rounding
function rounding(x) {
    console.log("Value: " + x)
    console.log("Round Integer Upperbound: " + Math.ceil(x));
    console.log("Round Integer Lowerbound: " + Math.floor(x));
    console.log("Round: " + Math.round(x));
    console.log("Round to nearest 5: " + roundToNearestMultipleOf5(x));    
} 

function roundToNearestMultipleOf5(num) {
    return Math.round(num / 5) * 5;
  }

var arr = [];
for (let i = 0; i < 3; i++) {
    let y = Math.random() * 100;
    rounding(y);
    arr.push(y);
}

console.log(arr)

// ---------------------------------------------------
// BITWISE OPERATIONS
var y = 15;

function bitwiseOperations(num) {
    console.log("---------------------------------------------------")
    console.log(num);
    console.log("AND: " + (num&1))
    console.log("OR: " + (num|1))
    console.log("XOR: " + (num^1))
    console.log("NOT: " + (~num))
    console.log("LEFTSHIFT: " + (num<<1))
    console.log("RIGHTSHIFT: " + (num>>1))
}
bitwiseOperations(y);

// ---------------------------------------------------
// STRINGS

const word = "My name is RANJETH."

function testingStrings(word, searchInput) {
    console.log("---------------------------------------------------")
    console.log("Word: " + word)
    console.log("Length: " + word.length)
    console.log(`Search for word(${searchInput}): ` + word.search(searchInput))
    console.log("Replaces a word: " + word.replace("RANJETH", "ronko"))
    console.log("Uppercase: " + word.toUpperCase())
    console.log("Lowercase: " + word.toLowerCase())
    let splitWord = word.split(" ")
    console.log("Splitting word by \" \": " + splitWord + " Specfic Word in split array: " + splitWord.at(-2))
    let whitespaceWord = "   ranjeth   "
    console.log(`Removes white space around text(${whitespaceWord}): ` + whitespaceWord.trim())
}

testingStrings(word, "RANJETH");

// ---------------------------------------------------
// REGREX

function testingRegex(word) {
    console.log("---------------------------------------------------")
    let pattern = "RANJETH"; // pattern
    let modifiers = "i"; // modifiers
    let regex = new RegExp(pattern, modifiers); // pattern, modifiers
    console.log("Word: " + word)
    console.log("Regex test method (returns bool): " + regex.test(word))
    console.log("Using Regex to replace a pattern: " + word.replace(regex, "Ronko"))
}

testingRegex(word);

// ---------------------------------------------------
// ARRAYS AND OBJECTS

function createAnArray(size) {
    console.log("---------------------------------------------------")

    let array = new Array();

    for (let i = 0; i < size; i++) {
        let randomVal = Math.round(Math.random() * 100);
        array.push(randomVal);
    }
    console.log("Creating an Array: ")
    console.log(array)
    console.log("Size of Array using (.length): " + array.length)
    console.log("Sorting Array: ")
    console.log(array.sort())
    array[array.length - 1] = 99;
    console.log("Changing Last Value using Index: " +array[array.length - 1])
    console.log(array)

}

createAnArray(5);

function arrayMethods() {
    console.log("---------------------------------------------------")

    let array = ["Apple", "Banana", "Pear", "Orange"];
    console.log(array);

    console.log("Array to a string:")
    console.log(array.toString())
    console.log("Array to a string with a seperator:")
    console.log(array.join(" - "))

    array.push("Strawberry")
    console.log("Pushing last element to array (.push)")
    console.log(array)

    array.pop()
    console.log("Removing last element of array (.pop)")
    console.log(array)

    array.shift()
    console.log("Removing first element of array (.shift)")
    console.log(array)

    array.unshift("Watermelon")
    console.log("Adding element to head of array, and shifting other elements positions: (.unshift)")
    console.log(array)

    let temp = ["Potato", "Cucumber", "Apple"]
    let z = array.concat(temp)
    console.log("Mergin two arrays using (.concat)")
    console.log(z)

    console.log("---------------------------------------------------")
    // Array sorting methods with strings.

    z.sort()
    console.log("Sorting Arrays lexilogically (.sort)")
    console.log(z)

    z.reverse()
    console.log("Reverse Arrays lexilogically (.reverse)")
    console.log(z)

    console.log("---------------------------------------------------")
    // Array sorting methods with integers.
    array = [4, 50, 1, 3, 20]
    console.log("Sorting arrays numerically (.sort(comparison))")
    console.log(array)
    array.sort(function(a,b){return a-b});
    console.log(array)

    array = [4, 50, 1, 3, 20]
    console.log("Finding the max value within an array (Math.max.apply(null, array))")
    console.log(array)
    console.log(Math.max.apply(null, array))

    console.log("Finding the min value within an array (Math.min.apply(null, array))")
    console.log(array)
    console.log(Math.min.apply(null, array))

    console.log("---------------------------------------------------")
    // Maps and Filters
    console.log("Using Filter to create a new array using a contditional statement")
    var Z = array.filter(function greaterThan(num) {
        return num > 5;
    })
    console.log(Z)

    console.log("Using Map to apply function to each element")
    Z = array.map(function multiply(num) {
        return num * 10;
    })
    console.log(Z)
}

arrayMethods();

function understandingObjects() {
    console.log("---------------------------------------------------")
    // Creating an Object, using object literal.
    var object = {
        Maths: 20,
        Physics: 10,
        Chemistry: 30,
    }
    console.log("Creating an Object using object literal:")
    console.log(object)

    // Array methods work with objects.
    // Finding the max value in the object.
    var maxMarks = Math.max(object.Maths, object.Physics, object.Chemistry);
    var maxSubject;

    // Finding the Relevant "name" to the "value".
    for (var subject in object) {
        if (object[subject] === maxMarks) {
            maxSubject = subject;
            break;
        }
    }

    console.log("Biggest Vlaue in Object: " + maxSubject);

    // Creating an object using keyword.

    var person = new Object();
    person.firstName = "Monkey";
    person.lastName = "Potato";
    person.age = 23;
    console.log("\nCreating an Object using keyword:")
    console.log(person)

    // Using a function to create objects.
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    person = new Person("Ranjeth", "R", 23);
    console.log("\nCreating an Object using a function:")
    console.log(person)
}

understandingObjects();