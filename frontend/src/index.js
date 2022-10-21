import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.js'
import reportWebVitals from './reportWebVitals.js'
import Test from './test.js'
import Customer_Signup from './Customer_Signup.js'
import Customer_Login from './Customer_Login.js'
import Forget_Password from './Forget_Password.js'
import Reset_Password from './Reset_Password.js'
import Admin_Login from './Admin_Login.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Admin_Login />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
