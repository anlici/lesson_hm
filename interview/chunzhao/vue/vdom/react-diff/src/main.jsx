import React from 'react';
import {createRoot} from 'react-dom/client'
function App() {
  return React.createElement(
    'div',
    {className: 'App'},
    React.createElement('h1', null, 'Hello World')
  )
}
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)