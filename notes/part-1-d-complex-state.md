# Part 1d: Complex State, Debugging React Apps
A components state or a piece of its state, can be of any type. Separate pieces of state can be handled by using the useState function multiple times, or alternatively by using a complex object to define the state

Example:
```jsx
const [up, setLeft] = useState(0)
const [down, setRight] = useState(0)
```

-or-

```jsx
const [position, setPosition] = useState({up: 0, down: 0})
```

-or-

```jsx
const [items, setItems] = useState([])
```
Background on useState
- The useState hook was introduced in React 16.8.0
- Previous versions of React required state to be defined as class components using the Javascript class syntax
- Best practice recommends useState for all new projects

### React State is Asynchronous
**Important Notes**:
- State updates in React happen asynchronously. I.E. The state update does **not** occur immediately. State will be updated **at some point before** the component is re-rendered. Do not expect the updated state to be reflected in its reference until after the component has re-rendered
- React hooks such as useState may only be called from the inside of a function body that defines a React component
> **Forbidden**: A components state must always be changed by setting the state to a new object. Mutation of an components state can result in unexpected side-effects and should be avoided

> **Forbidden**: The useState function must never be called from inside a loop, conditional expression, or anyplace that is not a **function defining a component**

### Debugging React Applications
- Log data and objects using console.log()
- Use comma separation to pass the data to be logged as an argument
  - Don't use + to do string concatenation of messages and data in log
- Use the debugger command to pause execution on a specific line for variable state inspection
- Place breakpoints in the Sources tab. Click on line number
- Add React Developer tools extension
  - Adds Components tab to the console, including states and props

[React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

Example:
```javascript
// separate things you want to log, with commas 
console.log('this is someObject', someObject)
```

```javascript
// use Chrome dev tools debugger
let sumNumbers = (someNumber, someOtherNumber) => someNumber + someOtherNumber
const someObject = {number: 6, letter: 'f'}
let someOtherObject = {...someObject, letter: 'u'}
debugger // pauses execution of code, allows for inspection of variable state
let sumOfNumbers = sumNumbers(someObject.number, someOtherObject.number)

```

### React Components - Don't Do
> **Do Not**: define components within components. React will treat the component as a new component during each render, preventing React from optimizing the component

- [The Beginners Guide to React](https://egghead.io/courses/the-beginner-s-guide-to-react)
- [React Official Documentation](https://react.dev/learn)
- Note that class based components in the React documentation are not relevant to newer versions of React using hooks


### Object Spread Syntax
ECMAScript introduced the object spread syntax in 2018
[Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

```javascript
const someObject = {
    size: "small",
    color: "orange",
    quantity: 15,
}

let anotherObject = {
    ...someObject,
    quantity: someObject.quantity - 1,
}
```

### A Function that Returns a Function
Examples of arrow function syntax for a function that returns a function
```javascript
const hello = (someOne) => {
  const handler = () => {
    console.log('hello', someOne)
  }

  return handler
}

// Arrow functions that return arrow functions only containing a single expression can use short hand syntax
const hello = (someOne) => () => {
  console.log('hello', someOne)
}
```
Use functions that return functions to pass props data to event handlers like onClick.

```jsx
const App = () => {
  const [temperature, setTemperature] = useState('hot')
  
  const setToTemperature = (newTemperature) => () => {
    console.log('setToTemperature', newTemperature)
    setValue(newTemperature)
  }
  
  return (
    <div>
      {temperature}
      <button onClick={setToTemperature('hot')}>warm</button>
      <button onClick={setToTemperature('warm')}>warm</button>
      <button onClick={setToTemperature('cool')}>cool</button>
      <button onClick={setToTemperature('cold')}>cold</button>
    </div>
  )
}
```
