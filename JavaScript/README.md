# JAVASCRIPT LEARNING / PROGRAMMING
Using various sites to learn coding concepts for interview prep, such as Hackerrank, Leetcode, InterviewBit, W3Schools, FreeCodeCamp.
- [Hackerrank](https://www.hackerrank.com/dashboard)
- [Leetcode](https://leetcode.com/)
- [InterviewBit](https://www.interviewbit.com/practice/)
- [GeeksForGeeks](https://www.geeksforgeeks.org/)
- [W3Schools](https://www.w3schools.com/js/DEFAULT.asp)

Even though I know coding concepts, I want to revitalise my programming knowledge again, by solving tutorials and coding challenges.

Through this document, I am going to review my progress and highlight important aspects of my learning, such as Data Structures & Algorithms, Arithmetic Operations, Language Specific Rules, etc.

## <span style="color:yellow;">Variables</span>
```javascript
var firstName = "Bob";

// Cannot be a reserved keyword (if, else, ...)
// Meaningful Identifiers
// Cannot start with a number
// Cannot contain a space or hyphen
// Case-sensitive so use Camel Case Notation.
```

```javascript
const money = 0.5;
money = 1;

// this is undefined.
// constants do not change in value
// typically global values.
```

## <span style="color:yellow;">VARIABLE METHODS</span>
| Operator      | Description      |
| ------------- | ------------- |
| typeof x | Checks the variables datatype in javascript. |

## <span style="color:yellow;">INTEGERS</span>
### Arithmetic Operations
| Operator      | Description      |
| ------------- | ------------- |
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| ** | Exponential |
| / | Division |
| % | Modulus |
| ++ | Increment |
| -- | Decrement |


### Bitwise Operations
| Operator      | Description      |
| ------------- | ------------- |
| & | AND |
| \| | OR |
| ^ | XOR |
| ~ | NOT |
| << | LEFT SHIFT |
| >> | RIGHT SHIFT |

### Math Methods (Math. _ )
| Operator      | Description      |
| ------------- | ------------- |
| .abs(x) | Absolute value |
| .ceil(x) | Round upwards to nearest integer |
| .floor(x) | Round downwards to nearest integer |
| .round(x) | Round to nearest integer |
| .random() | Radnom number between 0, 1 |
| .sqrt(x) | Square root of x |
| .max(x, ..) | Returns maximum of values |
| .min(x, ..) | Returns minimum of values |
| .log(x) | Returns the natural logarithm of x |
| .log2(x) | Returns the base-2 logarithm of x |
| .sign(x) | Returns the sign of a number (checks whether it is positive, negative or zero) |
| .trunc(x) | Returns the integer part of a number (x) |

## <span style="color:yellow;">STRINGS</span>
A string is a sequence of characters, such as letters, numbers, and symbols, stored and manipulated as a single unit of data.

| Method | Description |
| --- | --- |
| length | Returns the length of the string. |
| charAt() | Provides the char value present at the specified index. |
| charCodeAt() | Provides the Unicode value of a character present at the specified index. |
| concat() | Provides a combination of two or more strings. |
| indexOf() | Provides the position of a char value present in the given string. |
| lastIndexOf() | Provides the position of a char value present in the given string by searching a character from the last position. |
| search() | Searches a specified regular expression in a given string and returns its position if a match occurs. |
| match() | Searches a specified regular expression in a given string and returns that regular expression if a match occurs. |
| replace() | Replaces a given string with the specified replacement. |
| substr() | Fetches the part of the given string on the basis of the specified starting position and length. |
| substring() | Fetches the part of the given string on the basis of the specified index. |
| slice() | Fetches the part of the given string. It allows us to assign positive as well as negative index. |
| toLowerCase() | Converts the given string into lowercase letter. |
| toLocaleLowerCase() | Converts the given string into lowercase letter on the basis of host’s current locale. |
| toUpperCase() | Converts the given string into uppercase letter. |
| toLocaleUpperCase() | Converts the given string into uppercase letter on the basis of host’s current locale. |
| split() | Splits a string into substring array, then returns that newly created array. |
| trim() | Trims the white space from the left and right side of the string. |
| includes() | Checks whether a string contains a specfic value and returns true/false. |
| repeat() | Repeats the the string multiple times. |
| endsWith() | Returns true or false if a string ends with a specific value. |

## <span style="color:yellow;">REGULAR EXPRESSION</span>
A regular expression is a sequence of characters that forms a search pattern.
Syntax - /pattern/modifiers;

### Methods
| Method | Description | Syntax | Returns |
| --- | --- | --- | --- |
| search() | Searches a string for a specified value | `string.search(/pattern/modifiers)` | The index of the match, or -1 if not found |
| replace() | Replaces a specified value with another value | `string.replace(/pattern/modifiers, replacement)` | The modified string |
| test() | Searches a string for a pattern | `/pattern/modifiers.test(string)` | true if the pattern is found, false otherwise |

### Patterns
| Pattern | Description |
| --- | --- |
| [abc] | Finds any of the characters in the brackets |
| [0-9] | Finds any digit |
| (x|y) | Finds either x or y |
| \d | Finds a digit |
| \s | Finds a whitespace character |
| \b | Finds a word boundary |
| \uxxxx | Finds a Unicode character |

### Creating a RegExp Object
|  | Description | Syntax |
| --- | --- | --- |
| RegExp Object | Creates a RegExp object | `let regex = new RegExp('pattern', 'modifiers')` |

### Example Use Cases
| Use Case | Description | Syntax |
| --- | --- | --- |
| Search for a pattern | Searches a string for a pattern | `/pattern/i.test(string)` |
| Replace a pattern | Replaces a pattern in a string | `string.replace(/pattern/i, replacement)` |
| Search for a pattern and return the index | Searches a string for a pattern and returns the index | `string.search(/pattern/i)` |

## ARRAYS
An array is a data structure that contains a group of elements of the same data type and stores them together in contiguous memory location. Elements in the array can be referenced with an index. Array are zero-indexing therefore the first element can be accessed with the index 0.

### Creating Arrays in JS
| Description | Syntax |
| --- | --- |
| Array Literal | `let array = [apple, banana, pear]`|
| Array in JS | `let array = new Array("apple","banana","pear")`|
| Acessing Elements | `console.log(array[0]) === "apple"` |
| Updating Elements | `array[0] = "Watermelon"` |

## <span style="color:yellow;">JavaScript Array Methods</span>

| Method | Description | Example |
| --- | --- | --- |
| `toString()` | Converts an array to a comma-separated string | `const arr = ["a", "b", "c"];`<br>` console.log(arr.toString());`<br>` // "a,b,c"` |
| `join(separator)` | Joins array elements into a string with a specified separator | `const arr = ["a", "b", "c"];`<br>` console.log(arr.join(" - ")); `<br>`// "a - b - c"` |
| `push(element)` | Adds a new element to the end of an array | `const arr = ["a", "b"];`<br>` arr.push("c");`<br>` console.log(arr);`<br>` // ["a", "b", "c"]` |
| `pop()` | Removes the last element from an array | `const arr = ["a", "b", "c"];`<br>` arr.pop(); `<br>`console.log(arr); `<br>`// ["a", "b"]` |
| `shift()` | Removes the first element from an array | `const arr = ["a", "b", "c"]; `<br>`arr.shift(); `<br>`console.log(arr); `<br>`// ["b", "c"]` |
| `unshift(element)` | Adds a new element to the beginning of an array | `const arr = ["b", "c"]; `<br>` arr.unshift("a"); `<br>`console.log(arr); `<br>`// ["a", "b", "c"]` |
| `concat(array)` | Merges two or more arrays into a new array | `const arr1 = ["a", "b"]; `<br>`const arr2 = ["c", "d"]; `<br>`console.log(arr1.concat(arr2)); `<br>`// ["a", "b", "c", "d"]` |
| `sort()` | Sorts array elements alphabetically/lexicographically | `const arr = ["Adarsh", "Utkarsh", "Harsh", "Shivam"];`<br>` arr.sort();`<br>` // ["Adarsh", "Harsh", "Shivam", "Utkarsh"]` |
| `sort(compareFunction)` | Sorts array elements based on custom comparison | `const arr = [4, 20, 10, 50]; `<br>`arr.sort((a, b) => a - b);`<br>` // [4, 10, 20, 50]` |
| `reverse()` | Reverses array order | `const arr = ["Adarsh", "Utkarsh", "Harsh", "Shivam"];`<br>` arr.reverse();`<br>` // ["Shivam", "Harsh", "Utkarsh", "Adarsh"]` |
| `Math.max.apply(null, array)` | Finds maximum value in array | `const arr = [4, 50, 1, 20]; `<br>`const maxVal = Math.max.apply(null, arr);`<br>` // 50` |
| `Math.min.apply(null, array)` | Finds minimum value in array | `const arr = [4, 20, 1, 50];`<br>` const minVal = Math.min.apply(null, arr);`<br>` // 1` |

## <span style="color:yellow;">Map and Filters</span>
| Method | Description | Syntax | Example |
| --- | --- | --- | --- |
| `filter()` | Creates a new array with elements satisfying a condition | `array.filter(callback(element, index, arr), thisValue)`<br>` function isPositive(num) { return num > 0}` | `const A = [112, 52, 0, -1, 944];`<br>` const z = A.filter(isPositive);`<br>` // [112, 52, 944]` |
| `map()` | Creates a new array by applying a function to each element | `array.map(callback(element, index, arr), thisValue)`<br>` function myFunction(num) { return num * 10}` | `const A = [1, 2, 3, 4];`<br>` const z = A.map(myFunction);`<br>` // [10, 20, 30, 40]` |

## <span style="color:yellow;">OBJECTS</span>
JavaScript objects are collections of named values, called properties or key-value pairs. Objects are variables that can contain multiple values.

Creating Objects:
   - Using Literals:
```javascript 
var Stud = {firstName: "Ranjeth", lastName: "R", age: 23, eyeColor: "black"};
```
   - Using `new` Keyword:
```javascript
var Stud = new Object();
Stud.firstName = "Ranjeth";
Stud.lastName = "R";
Stud.age = 23;
Stud.eyeColor = "black";
```
Accessing Object Properties:
  - Dot notation: `objectName.property`
  - Bracket notation: `objectName["property"]`
```javascript
  person.name = "Jhon" // Dot Notation
  person['name'] = "Jhon" // Bracket Notation

  let selection = "name";
  person[selection] = "Jhon" // Example case of Bracket Notation
```

Iterating Over Object Properties:
   - Use the `for...in` loop:
```javascript
var Stud = {firstName: "Ranjeth", lastName: "R", age: 23, eyeColor: "black"};
var temp = "";
for (var x in Stud) {
    temp += Stud[x] + " ";
}
// temp contains "Ranjeth R 23 black"
```

## <span style="color:yellow;">JavaScript Function Types</span>
Functions in JavaScript are reusable code blocks that perform specific tasks by taking arguments, processing them and returning values. 
<br>JavaScript supports 3 function types: 
- function declarations
- function expressions
- and arrow functions.

Additionally, functions can be nested within others, providing encapsulation, organisation and reusability through closures, which allow inner functions to retain access to outer function variables.

| Function Type | Description | Example |
| --- | --- | --- |
| **Function Declaration** | Declared with the `function` keyword. Saved for later use. | `function myFunction(a, b) { return a + b; }` |
| **Function Expression** | Defined using an expression. Stored in a variable. | `var x = function (a, b) { return a + b };` |
| **Function Constructor** | Defined using the `Function()` constructor. | `var x = new Function("a", "b", "return a + b");` |

## Function Parameters and Arguments

| Term | Description |
| --- | --- |
| **Parameters** | Names listed in the function definition. |
| **Arguments** | Real values passed to the function. |
| **Data Types** | Not specified in function definitions. |
| **Type Checking** | Not performed on passed arguments. |
| **Missing Arguments** | Set to `undefined`. |

## **<span style="color:yellow;">OOP (Object Oriented Programming)</span>**
Classes are templates or blueprints for creating objects. They encapsulate data and code that manipulate that data. JavaScript classes are built on prototypes and act as special functions.

### Class Declaration
To declare a class, use the class keyword followed by the class name and a pair of curly braces.
```javascript
class Student {
  // Body of class
}

const Student = class {
  // Body of class
};
```
### Instance of a Class
An instance is an object containing data and behavior described by the class.
```javascript
var student1 = new Student();  // student1 is now an instance of class Student

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const student1 = new Student("Max", 20);
console.log(student1.name);  // prints "Max"
console.log(student1.age);   // prints 20
```

### Constructor
Initialize instance data by defining a constructor function.
```javascript
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

### Static Members
The static keyword defines methods or properties for a class.
```javascript
class A {
  static propA = "propA";
  static methodA() {
    console.log("methodA");
  }
}

console.log(A.propA);        // prints "propA"
A.methodA();                // prints "methodA"

const a1 = new A();
console.log(a1.propA);       // prints undefined
a1.methodA();               // throws an error
```

## Inheritance
Class inheritance extends another class's properties and methods, enabling creation of new functionality.
- Child Class (Subclass/Derived Class): Extends features from another class.
- Parent Class (Superclass/Base Class): Provides properties and functionalities for inheritance.
```javascript
class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    printHi() {
        console.log("Hi");
    }
}

class Car extends Vehicle {
    constructor(brand, model, year) {
        super(brand, model);
        this.year = year;
    }
    printHello() {
        console.log("Hello");
    }
}

// Usage of Parent Class
const vehicle1 = new Vehicle("Toyota", "Corolla");
console.log(vehicle1.brand);
console.log(vehicle1.model);
vehicle1.printHi();


// Usage of Child Class (has unqiue variables & methods)
const car1 = new Car("Honda", "Civic", 2015);
console.log(car1.brand);
console.log(car1.model);
console.log(car1.year);
car1.printHi();
car1.printHello();
```

## Polymorphism
Polymorphism enables creating properties, functions or objects with multiple implementations.
- Multiple object types to implement common functionality differently.
- Substituting classes with shared methods and data.
- Derivative objects to override parent methods.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  hi() {
    console.log(`Hi, my name is ${this.name}.`);
  }
}

class Student extends Person {
  constructor(name) {
    super(name);
  }

  hi() {
    console.log(`Hi, my name is ${this.name}. I am a student.`);
  }
}

const p1 = new Person("Alex");
p1.hi(); // Output: "Hi, my name is Alex."

const s1 = new Student("Mark");
s1.hi(); // Output: "Hi, my name is Mark. I am a student."
```

# Data Structures and Algorithms
## Stacks
Data structure that follows the Last In First Out pricniple (LIFO).
Therefore the last element added to the stack is the first one to be removed.
Key Methods:
- Push : Adds an element to the top of the stack.
- Pop : Remvoves the top element from the stack.
- Peek : Returns the top element.

In javascript arrays can be used as a Stack. <br>
However this is how to write a stack manually, stacks can be written using arrays aswell.
```js
// Stack
export var Stack = function() {
    this.count = 0; // Length of the stack.
    this.storage = {}; // Empty object or array

    // Adds a value onto the end of the stack.
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // Removes and returns the value at the end of the stack
    this.pop = function() {
        // Checks if the stack has values.
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    // Returns the length/size of the stack.
    this.size = function() {
        return this.count;
    }

    // Returns the value at the end of the stack.
    this.peek = function(value) {
        return this.storage[this.count-1];
    }

    // Returns a string of all values in the stack.
    this.toString = function() {
        let string = "";
        for (let i = 0; i < this.count; i++) {
            string += this.storage[i] + " ";
        }
        return string;
    }
}
```

## Sets
A set is a data structure that stores a collection of unique elements.<br>
It has no duplicates, can be implemented using various data structures.
- Has
- Values
- Add
- Remove
- Union
- Intersection
- Difference
- Subset
```js
// Sets
export function mySet() {
    // the var collection will store the set.
    var collection = [];

    // Checks whether the value is in the set.
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    }

    // Returns all values in the set.
    this.values = function() {
        return collection;
    }

    // Adds an element to the set if it is not already in the set.
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    }

    // Removes an element from the set.
    this.remove = function(element) {
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index,1); // Removes element from an array by its index.
            return true;
        }
        return false;
    }

    // Returns the size of the collection
    this.size = function() {
        return collection.length;
    }

    // Returns the union of two sets.
    // Combines two sets without duplicates.
    this.union = function(otherSet) {
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        })
        secondSet.forEach(function(e){
            unionSet.add(e);
        })
        return unionSet;
    }

    // Returns the interstion of two sets as a new set.
    // Only returns values which are in both sets.
    this.intersection = function(otherSet) {
        let intersectionSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e)
            }
        })
        return intersectionSet;
    }

    // Returns the difference of two sets as a new set.
    // Only returns values which are unique to both sets.
    this.difference = function(otherSet) {
        let differenceSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        })
        return differenceSet;
    }

    // Tests to see if the set is a subset of another set.
    this.subset = function(otherSet) {
        let firstSet = this.values();
        return firstSet.every(function(value){
            return otherSet.has(value);
        })
    }
}
```
```js
setA = new Set();
setB = new Set();
setA.add("a");
setB.add("a");
setB.add("b");
setB.add("c");
setB.add("d");
setB.delete("a");
setB.has("a");
setB.add("d");
```
Sets are already built into Javascript however, the code above is how to implement sets through javascript yourself, implementing important functions which are not already built in.

## Queue
Queues store data sequentially, which follows the First in, First Out principle (FIFO).<br>
Where the first element added to the queue is the first one to be removed.
- Enqueue
- Dequeue
- Front/Head
```js
export function Queue() {
    var collection = [];

    // Adds element to the end of the queue.
    this.enqueue = function(element) {
        collection.push(element);
    }

    // Removes element from the head of the queue.
    this.dequeue = function() {
        return collection.shift();
    }

    // Returns value at the head/front of the queue.
    this.front = function() {
        return collection[0];
    }

    // Returns the legnth/size of the queue.
    this.size = function() {
        return collection.length;
    }

    // Checks if the queue is empty.
    this.isEmpty = function() {
        return (collection.length === 0)
    }

    // Prints the queue.
    this.print = function() {
        console.log(collection)
    }
}
```

## Priority Queue
Specialised queue where each element is associated with a priority value.<br>
Elements with higher prioirty are served before elements with lower priority <br>
If two elements have the same priority, they are served according to their order in the queue.
```js
// Adds element with priority into the queue.
// If the queue is empty the element is added on.
// Otherwise the element priroity is checked with 
// the priorities in the queue and added into the correct place.
this.enqueue = function(element) {
    if(this.isEmpty()) {
        collection.push(element)
    } else {
        let added = false;
        for (let i = 0; i < collection.length; i++) {
            // Checking the Priorities
            if (element[1] < collection[i][1]){
                collection.splice(i,0,element);
                added = true;
                break;
            }
        }
        if (!added) {
            collection.push(element);
        }
    }
}
```
A queue and priority queue are the same, the only difference is how elements are enqueued, as each element now have a priority which need to be checked before added into the array.

## Binary Search Tree (BST)
![BST](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221215114732/bst-21.png "BST")
<br>Used to store data in a sorted manner. Each node in the BST has at most **two children**, a left and a right child.
- left sub tree : containing values less than or equal to the parent node.
- right sub tree : containing values greater than or equal to the parent node.
- root : parent node at the top of the tree.
- leaf : node at the bottom of the tree which have no child nodes.

Using a BST is much faster to insert, delete or find a value within a tree than using an array, but slower than using a hash table.
```js
// Binary Search Tree (BST)

// Node class represents each node in the tree.
class Node{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

export class BST {
    // Initial BST where the root node is null
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;
        // Checks the first node, adds data for root node.
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            // Adds data by traversing the tree.
            // This is a recursive function to search the tree.
            const searchTree = function(node) {
                // Checks Left Node
                if (data < node.data) {
                    // If no node on left then place node.
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    }
                    // Otherwise if there is a node, recursive call to search tree.
                    else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                // Checks Right Node
                } else if (data > node.data) {
                    // If no node on right then place node.
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } 
                    // Otherwise if there is a node, recursive call to search tree.
                    else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    // Returns null if the data is the same as the root node.
                    return null;
                }
            }
            // Call for the searchTree function.
            return searchTree(node);
        }
    }

    // Returns the minimum data in the tree.
    // The minimum is always on the left most leaf in the tree.
    findMin() {
        let current = this.root;
        while(current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    // Returns the maximum data in the tree.
    // The maximum is always on the right most leaf in the tree.
    findMax() {
        let current = this.root;
        while(current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    // Finds data if it is in the tree.
    // Returns the node if it is in the tree.
    find(data) {
        let current = this.root;
        while(current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }

    // Checks to see whether data is in the tree.
    // Returns a true or false.
    isPresent(data) {
        let current = this.root;
        while(current !== null) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    // Removing data in a tree, this is a recursive function.
    remove(data) {
        const removeNode = function(node, data) {
            // Checks whether the node is empty.
            if (node === null) {
                return null;
            }
            if (data === node.data) {
                // Node has no children
                if(node.left == null && node.irght == null) {
                    return null;
                }

                // Node has no left child
                if (node.left == null) {
                    return node.right;
                }

                // Node has no right child
                if (node.right == null) {
                    return node.left;
                }

                // Node has two children
                let tempNode = node.right;
                while(tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        // Always starts with the root node and data which is being searched to be removed.
        this.root = removeNode(this.root, data);
    }
}
```

## Binary Search Tree : Tree Height and Tree Traversal

### Tree Height
- Min Height : Min height of a tree is the first node level where node does not have both a left and right node, therefore only haveing one or none.
```js
findMinHeight(node = this.root) {
  if (node == null) {
      return -1;
  }
  let left = this.findMinHeight(node.left)
  let right = this.findMinHeight(node.right)
  if (left < right) {
      return left + 1;
  } else {
      return right + 1;
  }
}
```
- Max Height : Max height of a tree is the last node level where the node has no left or right nodes, typically the leaf of the tree.
```js
findMaxHeight(node = this.root) {
  if (node === null) {
      return -1;
  }
  let left = this.findMaxHeight(node.left)
  let right = this.findMaxHeight(node.right)
  if (left > right) {
      return left + 1;
  } else {
      return right + 1;
  }
}
```
- Balanced : Checks whether the tree is balanced therefore each node before the leaf node needs to have two child nodes to be balanced.
```js
isBalanced() {
  return (this.findMinHeight() >= this.findMaxHeight() -1)
}
```

### Tree Traversal
This is the process of visiting each node in the tree in a specific order.
#### In-order
Follows the **left-root-right** policiy. The left subtree is visited first, followed by the root node, and finally the right subtree. This method is useful for returning the data in order.
```js
inOrder() {
  if (this.root == null) {
    return null;
  } else {
    // Obatins the data in the tree into an array in the left-root-right policy.
    let result = new Array();
    function traverseInOrder(node) {
      node.left && traverseInOrder(node.left);
      result.push(node.data);
      node.right && traverseInOrder(node.right);
    }
    traverseInOrder(this.root);
    return result;
  }
}
```
#### Pre-order
Follows the **root-left-right** policy. The root node is visited first followed by the left subtree, then finally the right subtree. This traversal is useful for creating a copy of the tree.
```js
preOrder() {
  if (this.root == null) {
    return null;
  } else {
    let result = new Array();
    function traversePreOrder(node) {
      result.push(node.data);
      node.left && traversePreOrder(node.left);
      node.right && traversePreOrder(node.right);
    }
    traversePreOrder(this.root);
    return result;
  }
}
```
#### Post-order
Follows the **left-right-root** policy. The left subtree is visited first, followed by the right subtree, then finally the root node. This traversal is useful for deleting the tree.
```js
postOrder() {
  if (this.root == null) {
    return null;
  } else {
    let result = new Array();
    function traversePostOrder(node) {
      node.left && traversePostOrder(node.left);
      node.right && traversePostOrder(node.right);
      result.push(node.data);
    }
    traversePostOrder(this.root);
    return result;
  }
}
```
#### Level Order (Breadth First Search)
This obtains the nodes on each level of the tree from the root node to the leaf.
```js
levelOrder() {
  let result = [];
  let temp = [];
  if (this.root !== null) {
    temp.push(this.root);
    while(temp.length > 0) {
      let node = temp.shift();
      result.push(node.data);
      if (node.left !== null) {
        temp.push(node.left);
      }
      if (node.right !== null) {
        temp.push(node.right);
      }
    }
    return result;
  } else {
    return null;
  }
}
```

## Hash Tables
![Hash Table](https://media.geeksforgeeks.org/wp-content/uploads/20240508162721/Components-of-Hashing-1024.webp "Hash Table")
A data structure that stores elements in key-value pairs.<br>
Operates with the principle of **hashing**, where a has function translates keys into distincy indicies in an array, which serves as the storage location for the corrseponding values.
- Common ways of implementing **map** data structures or **objects**
- Very efficient time complexity.

## Simplified Description
Maps Strings to numbers which correspond to indexes in an array, these indexes store information which is the value.<br>
Each word needs to be mapped to a different number, when two words link to the same index then this is called a **collision**.

Javascript implents Hash Tables through objects such as: 
```javascript
var object = {
    "key": value,
}
```
Code implemenation:

```javascript
// Hash Tables

// Hash Function
// Passing in the string and the max which is the number of buckets used in the hash table to store values.
// This is simple hash function, can be complicated such as SHA-256
export function hash(string, max) {
    var hash = 0;
    for (let i = 0; i < string.length; i++) {
        // Adding up each character code in the string
        hash += string.charCodeAt(i);
    }

    return hash % max;
}

export function HashTable() {
    let storage = []; // Stores data
    const strorageLimit = 14; // Number of Buckets within the array, usually large value otherwise there will be collisions.

    this.print = function() {
        console.log(storage)
    }

    this.add = function(key, value) {
        var index = hash(key, strorageLimit);
        if (storage[index] === undefined) {
            storage[index] = [
                [key,value]
            ];
        } else {
            var inserted = false;
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    storage[index][i][0] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                storage[index].push([key, value]);
            }
        }
    }

    this.remove = function() {
        var index = hash(key, strorageLimit);
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else {
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][0] === key) {
                    delete storage[index][i];          
                }         
            }
        }
    }

    this.lookup = function(key) {
        var index = hash(key, strorageLimit);

        if (storage[index] === undefined) {
            return undefined;
        } else {
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    return storage[index][i][1]
                }
            }
        }
    }
}
```

## Linked Lists
Linked List consists of a serioes of nodes connected by pointers or references.<br>
Each node contains data and a pointer to the next node in the list.


### Types of Linked Lists
- Singly Linked List: Each node points to the next node in the sequence.
- Doubly Linked List: Each node points to both the next and the previous node.
- Circular Linked List: The last node points back to the first node, forming a circle.
- Circular Doubly Linked List: A combination of circular and doubly linked lists.
- Header Linked List: Includes a special header node at the beginning

### Operations of Linked Lists:
- Insertion: Adding a new node to the list.
- Deletion: Removing a node from the list.
- Searching: Finding a node with a specific value.
- Reversing: Reversing the order nodes in the list.
- Finding Length: Determining the number of nodes in the list.

### Applications of Linked Lists

- Implementing stacks and queues: Linked lists provide an efficient way to implement these data structures.
- Handling collisions in hash tables: Linked lists can be used to store multiple values that hash to the same index.
- Representing graphs: Adjacency lists in graph representations often use linked lists.
- Dynamic memory allocation: Linked lists allow for efficient allocation and deallocation of memory

### Arrays vs Linked List
| Arrays | Linked List |
| --- | --- |
| Fixed Size | Dynamic Size |
| Slow inseration and deletion | Efficient Insertion and Deletion |
| Random Access, efficient indexing | No Random Access |
| May result in more memory waste | No Waste of memory |
| Sequentail access is faster in this case: elements in contiguous memory locations | Sequential access is slow in this case: elements not in contiguous memory locations|



![Singly Linked List](https://media.geeksforgeeks.org/wp-content/uploads/20240917161540/Singly-Linked-List.webp "Singly Linked List")

```javascript
// Linked List Implementation
export function LinkedList() {
    // Private variables for tracking the list's length and head (first node)
    var length = 0; // Tracks the number of nodes in the list
    var head = null; // The first node in the linked list

    // Node class to represent an element in the linked list
    var Node = function(element) {
        this.element = element; // The data stored in the node
        this.next = null; // Reference to the next node in the list (default is null)
    }

    // Returns the current size (number of nodes) in the list
    this.size = function() {
        return length;
    }

    // Returns the head (first node) of the list
    this.head = function() {
        return head;
    }

    // Adds a new element at the end of the linked list
    this.add = function(element) {
        var node = new Node(element); // Create a new node with the given element

        // If the list is empty (no head), set the new node as the head
        if (head === null) {
            head = node;
        } else {
            // Traverse the list until the last node
            var currentNode = head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            // Set the next of the last node to the new node
            currentNode.next = node;
        }
        length++; // Increment the size of the list
    }

    // Removes a node with the specified element from the list
    this.remove = function(element) {
        var currentNode = head; // Start from the head
        var previousNode;

        // If the head node is the one to be removed
        if (currentNode.element === element) {
            head = currentNode.next; // Update head to the next node
        } else {
            // Traverse the list to find the node with the element
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            // Bypass the node to be removed
            previousNode.next = currentNode.next;
        }
        length--; // Decrement the size of the list
    }

    // Checks if the linked list is empty
    this.isEmpty = function() {
        return length === 0; // Returns true if size is 0, otherwise false
    }

    // Finds the index of a given element in the list
    this.indexOf = function(element) {
        var currentNode = head; // Start from the head
        var index = -1; // Initialize index to -1

        // Traverse the list to find the element
        while (currentNode) {
            index++;
            if (currentNode.element === element) {
                return index; // Return the index if the element is found
            }
            currentNode = currentNode.next; // Move to the next node
        }
        return -1; // Return -1 if the element is not found
    }

    // Returns the element at a specific index in the list
    this.elementAt = function(index) {
        var currentNode = head; // Start from the head
        var count = 0;

        // Traverse the list until the desired index is reached
        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.element; // Return the element at the index
    };

    // Adds a new element at a specific index in the list
    this.addAt = function(index, element) {
        var node = new Node(element); // Create a new node with the given element
        var currentNode = head;
        var previousNode;
        var currentIndex = 0;

        // Special case: Adding at the start of the list
        if (index === 0) {
            node.next = currentNode; // Point the new node to the current head
            head = node; // Update the head to the new node
        } else {
            // Traverse the list to find the position to insert
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            // Insert the new node at the index
            node.next = currentNode;
            previousNode.next = node;
        }
        length++; // Increment the size of the list
    }

    // Removes the element at a specific index in the list
    this.removeAt = function(index) {
        var currentNode = head;
        var previousNode;
        var currentIndex = 0;

        // Return null if the index is invalid
        if (index < 0 || index >= length) {
            return null;
        }

        // Special case: Removing the head node
        if (index === 0) {
            head = currentNode.next; // Update the head to the next node
        } else {
            // Traverse the list to find the node at the index
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            // Bypass the node to be removed
            previousNode.next = currentNode.next;
        }
        length--; // Decrement the size of the list
        return currentNode.element; // Return the removed element
    }
}
```

## Trie Data Structure (Prefix Tree)

![Trie Data Structure](https://media.geeksforgeeks.org/wp-content/uploads/20220828232752/Triedatastructure1.png "Trie Data Structure")

A tree like data structure used for storing dynamic set of strings.<br>
Efficient for retrieval operations such as searching for a string or finding all strings with a common prefix.<br>
Used primiarily in search algorithms inclduing autocomplete and spell checker.

### Key Principles and Properties
- **Nodes and Edges**: Each node in a Trie represents a character, and each edge represents the transition from one character to another. The root node is empty and serves as the starting point.
- **Common Prefix**: If two strings share a common prefix, they will have the same ancestor in the Trie. This property allows efficient prefix-based searching.
- **Character Set**: For simplicity, a Trie can be designed to handle only lowercase English letters (a-z), requiring 26 pointers per node.

```javascript
// Trie Data Structure Implementation
export function Trie() {
    // Node class for the Trie
    var Node = function () {
        this.keys = new Map(); // Stores child nodes as key-value pairs (character -> Node)
        this.end = false; // Indicates whether this node marks the end of a valid word

        // Marks this node as the end of a word
        this.setEnd = function() {
            this.end = true;
        }

        // Checks if this node marks the end of a word
        this.isEnd = function() {
            return this.end;
        }
    }

    // Root node of the Trie
    this.root = new Node();

    // Adds a word to the Trie
    this.add = function(input, node = this.root) {
        // Base case: If the input string is empty, mark the current node as the end of a word
        if (input.length == 0) {
            node.setEnd();
            return;
        } 
        // If the first character of the input is not already in the current node's keys
        else if (!node.keys.has(input[0])) {
            // Create a new node for this character and add it to the keys
            node.keys.set(input[0], new Node());
            // Recursively add the rest of the word to the Trie
            return this.add(input.substr(1), node.keys.get(input[0]));
        } 
        // If the character already exists, move to the next node and continue adding
        else {
            return this.add(input.substr(1), node.keys.get(input[0]));
        }
    }

    // Checks if a word exists in the Trie
    this.isWord = function(word) {
        let node = this.root; // Start from the root node

        // Traverse the Trie for each character in the word
        while (word.length > 1) {
            // If the character is not in the current node's keys, the word does not exist
            if (!node.keys.has(word[0])) {
                return false;
            } 
            // Move to the next node and shorten the word
            else {
                node = node.keys.get(word[0]);
                word = word.substr(1);
            }
        }

        // Return true if the last character exists in the Trie and marks the end of a word
        return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false;
    };

    // Prints all words stored in the Trie
    this.print = function() {
        let words = new Array(); // Array to store words

        // Helper function to recursively search for words in the Trie
        let search = function(node, string) {
            // If the current node has child nodes
            if (node.keys.size != 0) {
                // Traverse each child node
                for (let letter of node.keys.keys()) {
                    // Recursively search deeper, appending the current letter to the string
                    search(node.keys.get(letter), string.concat(letter));
                }
                // If the current node marks the end of a word, add the word to the list
                if (node.isEnd()) {
                    words.push(string);
                }
            } 
            // If the current node has no children (leaf node)
            else {
                // If the string is not empty, add it as a word
                string.length > 0 ? words.push(string) : undefined;
                return;
            }
        };

        // Start the recursive search from the root node with an empty string
        search(this.root, new String());

        // Return the list of words, or an empty list if no words are found
        return words.length > 0 ? words : [];
    };
}
```


## Heap
A complete binary tree, meaning all levels are fully filled except possibly the last level, which is filled from left to right.<br>
The heap property ensures that for every node, the value of the parent node is either greater than or equal to (max-heap) or less than or equal to (min-heap) the values of its children.

### Two types of Heaps
- **Max-Heap**: The value of each node is greater than or equal to the values of its children, ensuring that the root node contains the maximum value.

- **Min-Heap**: The value of each node is less than or equal to the values of its children, ensuring that the root node contains the minimum value.

![Min and Max Heap](https://cdn.programiz.com/sites/tutorial2program/files/max-heap-min-heap.jpg "Min and Max Heap")

![Heap Tree](https://3.bp.blogspot.com/-uev1nIcnE3U/UGqWsMgYVFI/AAAAAAAAApE/3hD0vBECHMk/s1600/heap_cropped.png "Heap Tree")

```javascript
// Heap
// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2 
// MinHeap Implementation
export function MinHeap() {
    // Initialize the heap with a dummy element at index 0 for easier index calculations
    let heap = [null];

    // Insert a number into the MinHeap
    this.insert = function(num) {
        heap.push(num); // Add the new number to the end of the heap
        if (heap.length > 2) {
            let idx = heap.length - 1; // Start at the last inserted element
            // Bubble up the new element until the heap property is restored
            while (heap[idx] < heap[Math.floor(idx / 2)]) {
                if (idx >= 1) {
                    // Swap the current element with its parent
                    [heap[Math.floor(idx / 2)], heap[idx]] = [heap[idx], heap[Math.floor(idx / 2)]];
                    // Move up the heap
                    if (Math.floor(idx / 2) > 1) {
                        idx = Math.floor(idx / 2);
                    } else {
                        break;
                    }
                }
            }
        }
    };

    // Remove and return the smallest element (root) from the MinHeap
    this.remove = function() {
        let smallest = heap[1]; // The smallest element is at the root
        if (heap.length > 2) {
            // Replace the root with the last element
            heap[1] = heap[heap.length - 1];
            heap.splice(heap.length - 1); // Remove the last element
            if (heap.length == 3) {
                // Handle the special case of only two elements in the heap
                if (heap[1] > heap[2]) {
                    [heap[1], heap[2]] = [heap[2], heap[1]]; // Swap if out of order
                }
                return smallest;
            }
            let i = 1; // Start at the root
            let left = 2 * i; // Left child
            let right = 2 * i + 1; // Right child
            // Bubble down to restore the heap property
            while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
                if (heap[left] < heap[right]) {
                    [heap[i], heap[left]] = [heap[left], heap[i]];
                    i = 2 * i;
                } else {
                    [heap[i], heap[right]] = [heap[right], heap[i]];
                    i = 2 * i + 1;
                }
                left = 2 * i;
                right = 2 * i + 1;
                // Stop if we reach a leaf node
                if (heap[left] == undefined || heap[right] == undefined) {
                    break;
                }
            }
        } else if (heap.length == 2) {
            // If only one element, remove it
            heap.splice(1, 1);
        } else {
            // If the heap is empty, return null
            return null;
        }
        return smallest; // Return the smallest element
    };

    // Sort the elements in the heap (destructive operation)
    this.sort = function() {
        let result = [];
        while (heap.length > 1) {
            result.push(this.remove()); // Repeatedly remove the smallest element
        }
        return result; // Return the sorted array
    };
}

// MaxHeap Implementation
export function MaxHeap() {
    // Initialize the heap with a dummy element at index 0 for easier index calculations
    let heap = [null];

    // Print the current state of the heap
    this.print = () => heap;

    // Insert a number into the MaxHeap
    this.insert = function(num) {
        heap.push(num); // Add the new number to the end of the heap
        if (heap.length > 2) {
            let idx = heap.length - 1; // Start at the last inserted element
            // Bubble up the new element until the heap property is restored
            while (heap[idx] > heap[Math.floor(idx / 2)]) {
                if (idx >= 1) {
                    // Swap the current element with its parent
                    [heap[Math.floor(idx / 2)], heap[idx]] = [heap[idx], heap[Math.floor(idx / 2)]];
                    // Move up the heap
                    if (Math.floor(idx / 2) > 1) {
                        idx = Math.floor(idx / 2);
                    } else {
                        break;
                    }
                }
            }
        }
    };

    // Remove and return the largest element (root) from the MaxHeap
    this.remove = function() {
        let largest = heap[1]; // The largest element is at the root
        if (heap.length > 2) {
            // Replace the root with the last element
            heap[1] = heap[heap.length - 1];
            heap.splice(heap.length - 1); // Remove the last element
            if (heap.length == 3) {
                // Handle the special case of only two elements in the heap
                if (heap[1] < heap[2]) {
                    [heap[1], heap[2]] = [heap[2], heap[1]]; // Swap if out of order
                }
                return largest;
            }
            let i = 1; // Start at the root
            let left = 2 * i; // Left child
            let right = 2 * i + 1; // Right child
            // Bubble down to restore the heap property
            while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
                if (heap[left] > heap[right]) {
                    [heap[i], heap[left]] = [heap[left], heap[i]];
                    i = 2 * i;
                } else {
                    [heap[i], heap[right]] = [heap[right], heap[i]];
                    i = 2 * i + 1;
                }
                left = 2 * i;
                right = 2 * i + 1;
                // Stop if we reach a leaf node
                if (heap[left] == undefined || heap[right] == undefined) {
                    break;
                }
            }
        } else if (heap.length == 2) {
            // If only one element, remove it
            heap.splice(1, 1);
        } else {
            // If the heap is empty, return null
            return null;
        }
        return largest; // Return the largest element
    };
}
```

## Graphs
Non-linear data structure consisting of vertices (nodes) and edges (connections between nodes).<br>
It is used to represent relationships between different entities. <br>
Graphs are useful in fields such as social network analysis, reccomendation systems, and computer networks.

### Components of a Graph

- **Vertices**: The fundamental units of the graph, also known as nodes. Each vertex can be labeled or unlabeled.

- **Edges**: Connections between two nodes. Edges can be directed or undirected, and they can be labeled or unlabeled.

### Representation of Undirected Graph as Adjacency Matrix
![Representation of Undirected Graph as Adjacency Matrix](https://media.geeksforgeeks.org/wp-content/uploads/20230727130331/Undirected_to_Adjacency_matrix.png "Representation of Undirected Graph as Adjacency Matrix")
```javascript
function addEdge(mat, i, j) {
    mat[i][j] = 1; // Graph is 
    mat[j][i] = 1; // undirected
}

function displayMatrix(mat) {
    // Display the adjacency matrix
    for (const row of mat) {
        console.log(row.join(" ")); 
    }
}

// Main function to run the program
const V = 4; // Number of vertices

 // Initialize matrix
let mat = Array.from({ length: V }, () => Array(V).fill(0));

// Add edges to the graph
addEdge(mat, 0, 1);
addEdge(mat, 0, 2);
addEdge(mat, 1, 2);
addEdge(mat, 2, 3);

/* Optionally, initialize matrix directly
let mat = [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
];
*/

// Display adjacency matrix
console.log("Adjacency Matrix:");
displayMatrix(mat);
```

### Representation of Undirected Graph as Adjacency List
![Representation of Undirected Graph as Adjacency List](https://media.geeksforgeeks.org/wp-content/uploads/20230727154843/Graph-Representation-of-Undirected-graph-to-Adjacency-List.png "Representation of Undirected Graph as Adjacency List")

```javascript
function addEdge(adj, i, j) {
    adj[i].push(j);
    adj[j].push(i); // Undirected
}

function displayAdjList(adj) {
    for (let i = 0; i < adj.length; i++) {
        console.log(`${i}: `); 
        for (const j of adj[i]) {
             console.log(`${j} `); 
        }
        console.log(); 
    }
}

// Create a graph with 4 vertices and no edges
const V = 4;
const adj = Array.from({ length: V }, () => []);

// Now add edges one by one
addEdge(adj, 0, 1);
addEdge(adj, 0, 2);
addEdge(adj, 1, 2);
addEdge(adj, 2, 3);

console.log("Adjacency List Representation:");
displayAdjList(adj);

/*
Adjacency List Representation:
0: 1 2 
1: 0 2 
2: 0 1 3 
3: 2 
*/
```

## Breadth First Search (Graph Traversal Algorithm)
It begins with a node, then first traverses all its adjacent. Once all adjacent are visited, then their adjacent are traversed.
![BFS](https://cdn.hashnode.com/res/hashnode/image/upload/v1705137909430/fa90afea-028b-46ac-b52b-af77feedc587.jpeg?auto=compress,format&format=webp "BFS")
```javascript
 // Breadth-First Search (BFS) function for graphs
export function bfs(graph, root) {
    // Object to store the shortest distance from the root to each node
    var nodesLen = {};

    // Initialize all nodes with a distance of Infinity, indicating they are not yet visited
    for (var i = 0; i < graph.length; i++) {
        nodesLen[i] = Infinity;
    }

    // Set the distance for the root node to 0 (distance to itself)
    nodesLen[root] = 0;

    // Queue to keep track of nodes to visit during BFS (FIFO structure)
    var queue = [root];
    var current;

    // Loop until the queue is empty (all reachable nodes are visited)
    while (queue.length != 0) {
        // Dequeue the first element (current node) from the queue
        current = queue.shift();

        // Get the adjacency list for the current node (connected nodes)
        var curConnected = graph[current];

        // Array to store indices of neighbors connected to the current node
        var neighborIdx = [];

        // Find the indices of neighbors connected to the current node
        var idx = curConnected.indexOf(1); // Look for a '1' in the adjacency list
        while (idx != -1) {
            neighborIdx.push(idx); // Add the neighbor index to the list
            idx = curConnected.indexOf(1, idx + 1); // Continue searching for more neighbors
        }

        // Loop through all neighbors of the current node
        for (var j = 0; j < neighborIdx.length; j++) {
            // Check if the neighbor has not been visited (distance is still Infinity)
            if (nodesLen[neighborIdx[j]] == Infinity) {
                // Update the neighbor's distance (current node's distance + 1)
                nodesLen[neighborIdx[j]] = nodesLen[current] + 1;

                // Add the neighbor to the queue to process its neighbors later
                queue.push(neighborIdx[j]);
            }
        }
    }

    // Return the distance object with the shortest distances from the root to all nodes
    return nodesLen;
};
 ```