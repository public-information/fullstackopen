# Part 2a: Rendering a collection, modules
**But first, some things to remember...**
- Use console.log obviously
- Use IDE code snippet feature
  - Visual Studio code snippets
  - Webstorm Live Templates
  - etc...
- Use functional programming operators
  - find
  - filter
  - map
  - etc...
- Pass event handlers and data to child components
- Lift State to highest shared component

### Rendering Collections
React elements can be generated using iterable data. The example shows how a list of elements can be generated from an array using the .map function
List items produced by map using .jsx must have a unique key value/id.
```jsx
// return an array of li elements
<ul>
    {notes.map(note => 
        <li key={note.id}>
            {note.content}
        </li>
    )}
</ul>
```
```html
<ul>
    [
        <li>1 + 1 = 2</li>,
        <li>9 / 3 = 3</li>,
        <li>2 * 2 = 4</li>,
    ]
</ul>
```
React uses the key attributes of objects in an array to determine how to update the view generated by a component when the component is re-rendered.
[React Documentation: key=](https://react.dev/learn/preserving-and-resetting-state#option-2-resetting-state-with-a-key)

> **Anti-pattern**: Using array indexes as li element keys is an anti-pattern. Don't do it
> [More on that here](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318)

### Creating an ES6 Module
React components may be broken into different modules. Convention recommends naming the file after the component

Ex: Note.jsx
```jsx
const Note = ({ note }) => {
  return (
    <li>{note.content}</li>
  )
}

export default Note
```

Ex: App.jsx
```jsx
import Note from './Note'

const App = ({ notes }) => {
  // ...
}
```
> **Note**: When importing components, their location must be given in relation to the importing file


