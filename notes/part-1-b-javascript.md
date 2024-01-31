# Part 1b: Javascript
The official name of the JavaScript standard is ECMAScript

Versioning:
Ex: ECMAScript®2023 aka: ES14

## Data Types
Javascript defines the types Boolean, Null, Undefined, Number, String, Symbol, BigInt, and Object

## Transpilation
React transpiles newer Javascript code, ex: ES14, to older more compatible versions. This configuration is automatic when the React app was created with Vite and ensures scripts is compatible regardless of the browser

## Node
Node.js is a JavaScript runtime environment based on Google's Chrome V8 JavaScript engine
Latest versions of Node are compatible with latest versions of ECMAScript

To get a Node.js console, type: node
```shell
me@my-MBP ~ % node
Welcome to Node.js v20.3.1.
Type ".help" for more information.
> console.log("hi");
hi

```
Type .exit in a node console, to exit the console

Javascript files end in the extension .js
To run a javascript file using node, type node followed by the filename:
```shell
me@my-MBP ~ % node some_script.js
```

## Defining Variables
Keywords
- const: defines an constant ( cannot be reassigned )
- let: defines a variable ( curly brace scope )
- var: defines a variable ( function scope - legacy js )

```javascript
const x = 123
let y = "abc"
var z = []
```

const:
```shell
me@my-MBP ~ % node
> const x = 123
> x = 124
Uncaught TypeError: Assignment to constant variable.
```

let:
```shell
me@my-MBP ~ % node
> let a = 1
> a = a + 1
2

```

## Object Types
- array: object enabling collection of multiple items under a single variable name


### **array**:

- Contents of an array are defined by encapsulating items in square brackets. ex: [2,4,6,8]
- Content of objects like array can be mutated even when the array is assigned to const. The const itself cannot however be reassigned.
- Arrays are 0 indexed. Items in an array can be accessed by their index using bracket notation, ex: some_array[0] will access the first item in the array
- Array objects are iterable and have built in methods like .concat() .forEach() .map() .push()

**Note .push() mutates the original array, where as push returns a new array and observes principles of immutable data preferred by React.

```shell
me@my-MBP ~ % node
> const odds_array = [1,3,5]
> odds_array.length
3

> odds_array[2]
5

> odds_array[0] = -1
-1

> odds_array
[ -1, 3, 5 ]

> odds_array = []
Uncaught TypeError: Assignment to constant variable.

> another_odds_array = odds_array.concat(7)
[ -1, 3, 5, 7 ]

```
**Destructuring Assignment**
Individual items in an array can be assigned using destructuring assignment

```shell
me@my-MBP ~ % node
> const odds_array = [ -1, 3, 5, 7 ]
> let [first, second, ...rest] = odds_array
    
> first
-1
    
> second
3

> rest
[ 5, 7 ]

```

### **objects | object literal**:

- Contents of an object literal are defined by encapsulating properties in curly braces. ex: {"number": 1}
- Content of objects can be mutated even when the object is assigned to const. The const itself cannot however be reassigned.
- Objects holds content in named properties, consisting of a key and a value.
- Properties of an object can be accessed using dot or bracket notation
    - ex: some_object["color"] or some_object.color will access a property of the object named color
- Objects are iterable and have built in methods
- Object property names can contain whitespace, but must be encapsulated in "" in those cases
- Object property names with whitespace cannot be accessed via dot notation

```shell
me@my-MBP ~ % node
> const some_object = {"color": "red"}

> some_object.color
'red'

> some_object["color"]
'red'

> some_object.color = "blue"
'blue'

> some_object
{ color: 'blue' }

```

### **functions**:

Functions in ECMAScript can be defined as arrow functions
- If there is only one parameter, the () encapsulating the parameter can be eliminated
- If there is only one expression, the {} can also be eliminated ( useful for lambda expression )

```javascript
// arrow function
const divide = (dividend, divisor) => {
  return dividend / divisor
}
let quotient = divide(15,5)

// single param arrow function
const double_plus_2 = single => {
    double = single * 2
    return double + 2
}
let result = double(4)

// single expression arrow function
let triple = quantity => quantity * 3

```

Old school functions, using the function keyword
```javascript
// function declaration
function product(a, b) {
  return a * b
}

// function expression
const average = function(a, b) {
    return (a + b) / 2
}
```

### **classes**:

Javascript does not have classes like other object oriented languages
- ECMAScript offers a class syntax to simplify the definition of class-like objects
- They type of these class-like objects is *object*

```javascript
class Cat {
  constructor(name, personality) {
    this.name = name
    this.personality = personality
  }
  describe() {
    console.log(this.name + " is " + this.personality)
  }
}

const wiggy = new Cat("Wiggy", "Ridiculous")
wiggy.describe()

```

## Javascript References
- [Mozilla's Javascript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [A re-introduction to Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
- [You Don't Know Javascript](https://github.com/getify/You-Dont-Know-JS)
- [Eloquent Javascript](https://eloquentjavascript.net/)
- [Namaste Javascript](https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP)