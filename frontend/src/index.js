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
import Customer_Dashboard from './Customer_Dashboard.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/customer/dashboard" element={<Customer_Dashboard />} />
        <Route path="/customer/login" element={<Customer_Login />} />
        <Route path="/customer/signup" element={<Customer_Signup />} />
        <Route path="/customer/forgetpassword" element={<Forget_Password />} />
        <Route path="/customer/resetpassword" element={<Reset_Password />} />
        <Route path="/admin/login" element={<Admin_Login />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
