import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/* or 

const container = document.getElementById('root');

const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

*/