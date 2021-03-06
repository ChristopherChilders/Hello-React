
// Just like require() in Node.js code
// "ES6 Style Import" (as opposed to calling require() in Node.js)  
import React from 'react';     // Pull in the React library itself
                              // Put this in every .js file in your project
import logo from './logo.svg'; // Import an image (React will do optimizations)
import './App.css';            // Recommendation: no individual style files. 
                              //Just use index.css (which should already be in the project)

import Greet from './Greet';
import Counter from './Counter';
import ClickyCounter from './ClickyCounter';

// "App" is a component
// A component is a function that returns a React Element.
// A React Element is a description of a DOM element (or tree).
// The most common way to specify a React Element is by using JSX.
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Whatever <br></br>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <ClickyCounter startAt={300}/>
        <ClickyCounter />
        <Counter />
        {/* you can all do {} */}
        <Greet />
        <Greet whom="Seil" />
        <Greet whom="Oakley" />
        <Greet whom="Nuuuuurse" />
        <Greet whom="Princess Sparklepants" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Equivalent to module.exports
export default App;
