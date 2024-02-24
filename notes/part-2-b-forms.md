# Part 2b: Forms

### Controlled component
To render a controlled input, pass the value prop to it, or check for checkboxes and radios. React will ensure the input always has the value passed through the prop
```jsx
function Form() {
  const [firstName, setFirstName] = useState(''); // Declare a state variable...
  // ...
  return (
    <div>
        <input
          value={firstName} // ...force the input's value to match the state variable...
          onChange={e => setFirstName(e.target.value)} // ... and update the state variable on any edits!
        />
        <button onClick={() => setAge(ageAsNumber + 10)}>
            Add 10 years
        </button>
    </div>
  );
}
```
[React Docs: Controlled Input](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)

The value you pass to controlled components should not be ```undefined``` or ```null```. If you need the initial value to be empty, initialize state to an empty string ```('')```

```jsx
    // Call event.preventDefault() at the top of onSubmit event handler to prevent page reload
    const addNote = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)
        const noteObject = {
            content: newNote,
            id: notes.length + 1,
        }

        setNotes(notes.concat(noteObject))
    }
```

### Conditional ( ternary ) Operator
The conditional ( ternary ) operator is the only javascript operator that takes three operands

> Result variable will be set to the value of ```valueOne``` if **condition** is ```true```. If **condition** is ```false```, the result variable will be set to the value of ```valueTwo```
```javascript
const result = condition ? valueOne : valueTwo
```

### Equality Comparisons
[Mozilla Developer Docs Equality and Comparison](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

**==** loose equality (double equals)
Double equals comparisons will perform type conversion before comparison. Hanles Nan, -0 and +0 specially, to conform to IEEE 754
```Nan != Nan``` and ```-0 == 0```

**===** strict equality (triple equals)
Triple equals performs same comparisons as double equals, but **without type conversion** If the types don't match the comparison will evaluate to ```false```