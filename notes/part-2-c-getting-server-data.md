# Part 2c: Getting Data from the Server

### Browser as a Runtime Environment
JavaScript engines, or runtime environments follow an asynchronous model. In principle, this requires all IO operations (with some exceptions) be executed as non-blocking. This means that code execution continues immediately after calling an IO function, without waiting for it to return.

[Javascript Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop)

When an asynchronous operation is completed, or, more specifically, at some point after its completion, the JavaScript engine calls the event handlers registered to the operation.

JavaScript engines are single-threaded, which means that they cannot execute code in parallel. As a result, it is a requirement in practice to use a non-blocking model for executing IO operations. Otherwise, the browser would "freeze" during, for instance, the fetching of data from a server.

To be able to continuously react to user operations with sufficient speed, the code logic needs to be such that no single computation can take too long.

### Web Workers
[Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) allow web content to run scripts in background threads. Workers can perform tasks without interfering with the user interface

### Promises
> ***[Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)***: A Promise is an object representing the eventual completion or failure of an asynchronous operation.

Promises can be in one of three states
- Pending: The final value (one of the following two) is not available yet.
- Fulfilled: The operation has been completed and the final value is available. Generally is a successful operation. This state is sometimes also called resolved.
- Rejected: An error prevented the final value from being determined. Generally represents a failed operation.

```javascript
fetch("http://api.example.com/movies/1")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("404: Not Found");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```
[Axios](https://axios-http.com/docs/intro)
```javascript
import axios from 'axios'

const promise = axios.get('http://localhost:3001/notes')
console.log(promise)
```

```javascript
import axios from 'axios'
axios
    .get('http://localhost:3001/notes')
    .then(response => {
        const notes = response.data
        console.log(notes)
    })
    .catch((error) => {
        console.log('promise rejected', error)
    })
```

Storing the promise object in a variable is generally unnecessary. It is common to chain the then method call to the call returning the promise, so that it follows it directly

[From Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
> With this pattern, you can create longer chains of processing, where each promise represents the completion of one asynchronous step in the chain. In addition, the arguments to then are optional, and catch(failureCallback) is short for then(null, failureCallback) — so if your error handling code is the same for all steps, you can attach it to the end of the chain

### React Effect Hooks
Version 16.8.0
> Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.

```jsx
import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = () => {
  const [notes, setNotes] = useState([])
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')
  // ...
}
```
> By default, effects run after every completed render, but you can choose to fire it only when certain values have changed.
> The second parameter of useEffect is used to specify how often the effect is run. If the second parameter is an empty array [], then the effect is only run along with the first render of the component.

Note: There are many possible use cases for an effect hook other than fetching data from the server. The example is simply a demonstration

### JSON Server
Simulated REST API using JSON files
https://github.com/typicode/json-server

```shell
npm install json-server --save-dev
```



