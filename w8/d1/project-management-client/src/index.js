// src/index.js

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { AuthProviderWrapper } from './context/auth.context'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
        <App />
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
