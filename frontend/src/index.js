import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals.js'
import Customer_Signup from './customer_module/Customer_Signup.js'
import Customer_Login from './customer_module/Customer_Login.js'
import Forget_Password from './customer_module/Forget_Password.js'
import Reset_Password from './customer_module/Reset_Password.js'
import Admin_Login from './admin_module/Admin_Login.js'
import Customer_Management from './admin_module/Customer_Management.js'
import Customer_Dashboard from './customer_module/Customer_Dashboard.js'
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
        <Route path="/admin/customermanagement" element={<Customer_Management />} />
        <Route path="/customer/reset" element={<Reset_Password />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
