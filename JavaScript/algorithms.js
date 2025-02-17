
// Stack
export function Stack() {
    this.count = 0; // Length of the stack.
    this.storage = {}; // Empty object

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
            let index = collection.indexOf(element);
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

// Queue

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

// Priority Queue
export function PriorityQueue() {
    let collection = [];

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

    // Checks whether the tree is balanced.
    // Returns true or false
    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() -1)
    }

    // Returns the level of the first node which has one or no children.
    findMinHeight(node = this.root) {
        if (node == null) {
            return -1;
        }
        // Recursive call to find the min height
        let left = this.findMinHeight(node.left)
        let right = this.findMinHeight(node.right)
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    // Returns the level of the last node which does not have any children. (Leaf Node)
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

    // This method is useful for returning the data in order.
    inOrder() {
        if (this.root == null) {
            return null;
        } else {
            // Obatins the data in the tree into an array
            // in the left-root-right policy.
            let result = new Array();
            // Recursive function.
            function traverseInOrder(node) {
                // If the statement on the left is true then the method on the right will run.
                node.left && traverseInOrder(node.left);
                result.push(node.data);
                node.right && traverseInOrder(node.right);
            }
            traverseInOrder(this.root);
            return result;
        }
    }

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

    // Breadth first search, goes through each level of the tree and outputs the nodes.
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
}


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


// Graphs

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
