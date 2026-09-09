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

- Before React 16.8, class components were the only way to track state and lifecycle and functional components were considered stateless.
- Now with hooks, they are equivalent and React recommend you only use functional components.