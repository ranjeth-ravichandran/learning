import {helloWorld, wakeupCode, dateFormat, nextCharacter, getExtenstion, addingString, countVowels, doubleChar, findFirstOdd, findBiggestAndSmallest, addUp, isSameNum, and, sortByLength, boatFare, checkEmails} from "./methods.js";

helloWorld();
wakeupCode();
dateFormat();
nextCharacter("hello");
getExtenstion("potato.exe");
addingString("hello");
addingString("New!Hello");
console.log("Vowels: "+ countVowels("Hello"));
doubleChar("hello");
console.log(findFirstOdd([2,1,3]))
console.log(findBiggestAndSmallest([5]))
console.log(addUp(600))

// Reversing an Array
let arr = [4,3,2,1]
console.log(arr.reverse())

console.log(isSameNum(2,"2"))
console.log(and(true,true))
sortByLength(["Google", "Apple", "Microsoft"]);
console.log(boatFare(560))
console.log(checkEmails("Hi La Fosse, please can I buy 5 boat trip tickets"))

// Algorithms and Data Structures
import {mySet, PriorityQueue, Queue, Stack, BST, HashTable, hash, LinkedList, Trie, MinHeap, MaxHeap, bfs} from "./algorithms.js";

// Stacks (FILO)
var myStack = new Stack();
myStack.push(1);
myStack.push(5);
myStack.push(2);
console.log("Stack : " + myStack.toString())
console.log("Top of Stack: " + myStack.peek())
console.log("Value removed at top of stack: " + myStack.pop())
console.log("Top of Stack: " + myStack.peek())
console.log("Stack : " + myStack.toString())
console.log("Size: " + myStack.size())

// Sets
let setA = new mySet();
let setB = new mySet();
setA.add("a");
setB.add("a");
setB.add("b");
setB.add("c");
setB.add("d");
setB.remove("d");
console.log("Set A: " + setA.values())
console.log("Set B: " + setB.values())
console.log(setA.subset(setB))
console.log("Values which are in both sets: " + setA.intersection(setB).values())
console.log("Values unique to both sets: " + setB.difference(setA).values())

// Queue (FIFO)
let myQueue = new Queue();
myQueue.enqueue(1)
myQueue.enqueue(10)
myQueue.enqueue(4)
myQueue.print()
console.log("Front of Q: " + myQueue.front())
myQueue.dequeue()
myQueue.print()
console.log("Front of Q: " + myQueue.front())
console.log("Size of Q: " + myQueue.size())

// Priority Queue
myQueue = new PriorityQueue();
myQueue.enqueue(["Burger", 2])
myQueue.enqueue(["Chicken", 5])
myQueue.enqueue(["IceCream", 1])
myQueue.print();
myQueue.dequeue();
myQueue.print();
console.log("Front of Q: " + myQueue.front())
myQueue.enqueue(["Potato", 4])
myQueue.enqueue(["Flour", 2])
myQueue.print();

// Binary Search Tree (BST)
let myBST = new BST();
myBST.add(4);
myBST.add(2);
myBST.add(6);
myBST.add(1);
myBST.add(3);
myBST.add(5);
myBST.add(7);
myBST.remove(4);
console.log(myBST.findMin());
console.log(myBST.findMax());
myBST.remove(7);
console.log(myBST.findMax());
console.log(myBST.isPresent(4));
console.log(myBST.inOrder())
console.log(myBST.preOrder())
console.log(myBST.postOrder())
console.log(myBST.levelOrder())

// Hash Table
console.log(hash('quincy', 10))

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin')
console.log(ht.lookup('tux'))
ht.print();

// Linked List
var conga = new LinkedList();
conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add('Fish');
console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.elementAt(3));
console.log(conga.indexOf('Puppy'));
console.log(conga.size());

// Trie
var myTrie = new Trie()
myTrie.add('ball'); 
myTrie.add('bat'); 
myTrie.add('doll'); 
myTrie.add('dork'); 
myTrie.add('do'); 
myTrie.add('dorm')
myTrie.add('send')
myTrie.add('sense')
console.log(myTrie.isWord('doll'))
console.log(myTrie.isWord('dor')) // Word in the tree however not an actual word.
console.log(myTrie.isWord('dorf'))
console.log(myTrie.print())

// Heap


// Graphs
var graph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
];
console.log(bfs(graph, 1));