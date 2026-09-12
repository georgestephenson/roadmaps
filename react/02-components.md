# Components

- A piece of UI with its own logic and appearance
- A Javascript function returning markup

``` JS
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
```

- React components start with a capital letter when used in tags
- HTML tags are kept lowercase

``` JS
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

## Functional Components

- Before React 16.8, class components were the only way to track state and lifecycle and functional components were considered stateless.
- Now with hooks, they are equivalent and React recommend you only use functional components.

## JSX

- Allow you to write HTML-like markup inside a JavaScript file
- TSX is the TypeScript equivalent
- Fits well with the concept of React components - a JavaScript function that returns your UI HTML
- Must have a single root element
    - You can use `<></>` - this is called a fragment, leaving no trace in the browser HTML tree
- Tags must be explicitly closed, `<img>` must be `<img />`
- Generally use camelCase for attributes so that they can be used as JavaScript variable names

## Props vs State

- Props are passed to a component, whereas state is managed within the component
- In a component you can give state to multiple variables like so
  ``` JS
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  ```
  They are isolated and private within the component.
- `useState` is a hook to provide the state variable and its setter function.
- No need to `useState` within a single event handler or method. React state variables are for information to survive between re-renders.
- Props can be state of the parent component being passed down to the child component.
  - From the child's perspective it can't be changed, the parent should change it.
  - If they child wants to change it, they should expose an event, which the parent subscribes to
    So the parent would declare its child component
    ``` JS
    <MyChild name={this.state.childsName} onNameChanged={this.handleName} />
    ```
    The child would request a new name with event call back
    ``` JS
    this.props.onNameChanged('New name')
    ```
    and then the parent can set it for them
    ``` JS
    handleName: function(newName) {
      this.setState({ childsName: newName });
    }
    ```

    Same concept in Angular component inputs and outputs.