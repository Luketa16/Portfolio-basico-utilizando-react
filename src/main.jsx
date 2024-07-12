import React from 'react'
import ReactDOM from 'react-dom/client'
import Logo from './header'
import './header.css' 
import Principal from './principal'
import './principal.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Logo/>
    <Principal/>
  </React.StrictMode>,
)


