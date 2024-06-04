import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './Counter'
import './index.css'
import Toggle from './Toggle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter />
    <Toggle />
  </React.StrictMode>,
)
