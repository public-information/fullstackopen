# Part 1a: Introduction to React

## Build Tool:
Vite - https://vitejs.dev/guide/why.html

Vite consists of two primary parts:
- dev server
- build command

Create an application: Ex: my_app
```shell
# npm 7+, extra double-dash is needed:
npm create vite@latest my_app -- --template react

```

Start the dev server
```shell
npm run dev

```

Console should report
```shell
  VITE v5.0.12  ready in 95 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

```
Vite defaults to port 5173 or next available

## React Component Syntax
- React components are written using JSX
- JSX has similarities to some templating engines
- JSX returned by React components is compiled into JavaScript
- JSX is XML -like. All tags **MUST** be closed

```jsx
const App = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

// If the function consists of only a single expression
// a shorthand may be used
const App = () => (
    <div>
        <p>Hello world</p>
    </div>
)

// React components can render dynamic content
// JS code within {} is evaluated and rendered into HTML output
const App = (props) => {
    const now = new Date()
    return (
        <div>
            <p>Hello, {props.name} date is: {now.toString()}</p>
        </div>
    )
}

// Export is REQUIRED at bottom of component file
export default App
```
React components typically must contain either:
- one root element
- an array of components

To avoid extra nested elements when they are not necessary, empty element *fragments* can be used to wrap elements returned by the component

```jsx
const SomeComponent = (props) => {
  return (
    <>
      <h1>Some TODO List</h1>
      <SomeList tasks={props.tasks} />
      <Footer />
    </>
  )
}
```

In JSX, the things rendered inside {} must be **primitive** values, such as numbers or strings.
Objects **cannot** be rendered directly in JSX. The following will cause the error:

```jsx
const App = (props) => {
  return (
    <div>
      <p>{props}</p>
    </div>
  )
}

// Uncaught Error: Objects are not valid as a React child

```