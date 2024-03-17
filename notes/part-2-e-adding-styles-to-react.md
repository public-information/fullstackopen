# Part 2e: Adding Styles to React Apps

### CSS Rules
- CSS rules comprise of selectors and declarations.
- The selector defines which elements the rule should be applied to
- The declaration sets the selected element properties to the defined values
- A single CSS declaration can contain an arbitrary number of properties

> Prefer using class selectors to selecting by element tag directly

Class selectors are defined with the .class-name syntax
- Use kebab-case for .class-selector
- use camelCase for #idSelector

```css
#mainHeading {
    color: blue;
}

.name-input {
    color: green;
}
```

### Setting Class Names in React .jsx
When setting class names on react component elements in .jsx, use the className attribute instead of the class attribute

```jsx
const NameInput = () => {
    return (
        <>
            <input className={'name-input'} />
        </>
    )
}
```

### Returning null from a React component
If a React component returns ```null``` nothing will be rendered to the screen

```jsx
const Errors = ({ errors }) => {
  if (!errors.length) {
    return null
  }

  return (
    <div className='error'>
      {errors[0].message}
    </div>
  )
}
```

### Approaches to Style React Components
- Inline Styles
- Component CSS Modules
- CSS in JS Libraries
