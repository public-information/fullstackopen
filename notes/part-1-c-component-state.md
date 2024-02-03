# Part 1c: Component State and Event Handlers
Component state allows a component to be re-rendered in response to an event. When a components state changes, React wil re-render the component. I.E. the body of the component function gets re-executed

## Component Functions
Functions can be defined inside of a React components. Component props are directly available to the components functions and do not need to be passed as parameters.

```jsx
const Ify = (props) => {
    const ifyIt = () => {
        return props.word + "ify"
    }
    return (
        <div>
            <p>
                {ifyIt()}
            </p>
        </div>
    )
}
```

## Destructuring Objects
Destructuring of objects was added in the ES6 specification. It facilitates easy assignment of one or more of an objects properties to a new reference

```javascript
const someObject = {
    color: "blue",
    size: "small"
}
const { color, size } = someObject
```

In React, a props object can be destructured directly when it is passed to the component

```jsx
const Book = ({ title, author }) => {
    return (
        <div>
            <p>
                {title} was written by {author}
            </p>
        </div>
    )
}
```

## Adding State to a Component
State can be added to a component by importing and calling Reacts useState() function.  React documentation indicates that the convention for naming state variables during destructuring is:

```jsx
const [ something, setSomething ] = useState(0)
```
React documentation also suggests
> "In React, it's conventional to use onSomething names ( on, followed by a capital letter ) for props which take functions that handle events and handleSomething for the actual function Definitions which handle those events."

Example:
```jsx
import { useState } from 'react'

const Temp = () => {
    const [ temperature, setTemperature ] = useState('hot')
    
    return (
        <div>
                <div><span>{temperature}</span></div>
                <button onClick={() => setTemperature('cold')}>cold</button>
                <button onClick={() => setTemperature('hot')}>hot</button>
        </div>
    )
}

```

## Event Handlers
The value of a React onClick event handler must be either a function definition or a function reference
```jsx
<button onClick={() => handleClick(newState)}>button</button>
```

## React Best Practice
When working with nested components, React best practices recommend: **"lift the state up"**

> "Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor."
