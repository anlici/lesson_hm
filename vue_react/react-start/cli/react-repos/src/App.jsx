// src/App.js
import React, { useState } from 'react';
import ButtonComponent from './components/ButtonComponent';
import Repos from './components/repos/repos'

function App() {
  const [message, setMessage] = useState('Hello, World!');

  const changeMessage = () => {
    setMessage('Button was clicked!');
  };

  return (
    <div className="App">
      <h1>{message}</h1>
      <ButtonComponent initialText="Click Me" onClick={changeMessage} />
      <Repos />
    </div>
  );
}

export default App;