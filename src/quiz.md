### **Answers to the Questions**

#### **1. Where does React pull all of the elements I create in JSX when I call `root.render()`?**
React renders all the JSX elements into the DOM element that is passed to `createRoot`. In this case:
```javascript
const root = createRoot(document.getElementById('root'));
```
React targets the `<div id="root"></div>` in your `index.html` file and injects all the elements created by `root.render()` into this container.

---

#### **2. What would show up in my console if I were to run this line of code:**
```javascript
console.log(<h1>Hello World</h1>)
```

It would log a **React element** to the console, which is essentially a JavaScript object that describes the UI. The object might look like this:

```javascript
{
  type: "h1",
  props: {
    children: "Hello World"
  },
  key: null,
  ref: null,
}
```

React elements are lightweight representations of the actual DOM elements, used to create and manage the virtual DOM.

---

#### **3. What's wrong with this code:**
```javascript
root.render(
  <h1>Hi there</h1>
  <p>This is my website!</p>
)
```

**What's wrong:**
- JSX elements must be wrapped inside a single parent element because `root.render()` can only return a single React element.

**Fix:**
Wrap the elements in a `<div>`, `<React.Fragment>`, or shorthand `<>`:
```javascript
root.render(
  <div>
    <h1>Hi there</h1>
    <p>This is my website!</p>
  </div>
)
```

Or:
```javascript
root.render(
  <>
    <h1>Hi there</h1>
    <p>This is my website!</p>
  </>
)
```

---

#### **4. What does it mean for something in React to be "declarative" instead of "imperative"?**

- **Declarative**:
  - You describe **what** you want to achieve, and React handles the details of updating the DOM.
  - Example:
    ```jsx
    const isLoggedIn = true;
    return isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Sign In</h1>;
    ```
    Here, you describe the desired UI based on the state, and React figures out the DOM updates.

- **Imperative**:
  - You directly tell the DOM **how** to update.
  - Example (using vanilla JS):
    ```javascript
    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome Back!';
    document.body.appendChild(h1);
    ```

React’s declarative nature simplifies managing complex UI by letting developers focus on what the UI should look like rather than how to manipulate the DOM.

---

#### **5. What does it mean for something to be "composable"?**

- In React, **composable** means you can build complex UIs by combining smaller, reusable components.
- Each component is self-contained, focused on a specific piece of functionality, and can be easily reused in different parts of the app.

**Example**:
```jsx
function Header() {
  return <h1>Welcome to my website!</h1>;
}

function Footer() {
  return <footer>© 2023 My Website</footer>;
}

function App() {
  return (
    <div>
      <Header />
      <p>This is the main content of my website.</p>
      <Footer />
    </div>
  );
}
```

Here, the `App` component **composes** the `Header` and `Footer` components to create a larger, more complex UI.

---

### **Summary**
- React injects JSX elements into the DOM at the specified root.
- Logging JSX returns the React element object, which represents the virtual DOM.
- JSX must be wrapped in a single parent element.
- Declarative programming describes what the UI should look like, while imperative programming describes how to update the DOM.
- React's composability lets you build reusable, modular components for complex UIs.