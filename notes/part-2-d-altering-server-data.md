# Part 2d: Altering Data on the Server

### REST
- REST terminology refers to individual data objects as *resources*
- Typically every resource has a unique address associated with it, its URL

### Sending Data to the Server
Example: Creating a new resource by making a POST request
```javascript
  axios
    .post('http://localhost:3001/notes', { content: "remember, notes are important" })
    .then(response => {
      console.log(response)
    })
    .catch((error) => {
        console.log('promise rejected', error)
    })
```

```javascript
    fetch("http://localhost:3001/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: "remember, notes are important" }),
    })
    .then(response => {
        console.log(response.json())
    })
    .catch((error) => {
        console.log('promise rejected', error)
    })
```

### Single Responsibility Principle
> A module should be responsible to one, and only one, actor

> Gather together the things that change for the same reasons. Separate those things that change for different reasons

### Shorthand Property Names
A more compact Object Literal Syntax with ES6 syntax
Because the keys are the same as the values, the following export
```javascript
export default { 
  getAll: getAll, 
  create: create, 
  update: update 
}
```
Can be reduced to
```javascript
export default { getAll, create, update }
```
