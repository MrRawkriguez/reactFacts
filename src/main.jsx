import { createRoot } from 'react-dom/client'
import logo from './assets/react.svg'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
  <main>
    <img src={logo} className='react-logo' width='40px' />
    <h1>Fun facts about React!</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 200k stars on GitHub</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </main>
)

/*
- 1. Where does React pull all of the elements I create in JSX when I call `root.render()`?
- 2. What would show up in my console if  I were to run this line of code:
      console.log(<h1>Hello World</h1>)
- 3. What's wrong with this code:
      root.render(
        <h1>Hi there</h1>
        <p>This is my website!</p>
      )
- 4. What does it mean for something in React to be "declarative" instead of "imperative"?
- 5. What does it mean for something to be "composable"?
*/