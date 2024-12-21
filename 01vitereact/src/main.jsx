import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';
import ReactDOM from 'react-dom/client';


function MyApp(){
  return (
    <div>
      <h1>MyApp</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: "https://google.com",
//       target: '_blank',
//   },
//   children: 'Click me to visit Google',
// };



const anotherElement = (
  <a href="https://google.com" target="_blank">Google</a>
)

const anotherUser = "Hello "
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click here for Google',
  anotherUser
);

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
