import axios from 'axios';
import React from 'react';
import signb from '../images/signb.jpeg'
import "../style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';

function Reset_Password() {

    let location = useLocation()
    let userName = {
        userName: location.state.userName
    };

    let navigate= useNavigate()
    const [cust, setCust] = useState({
        confirmPassword: '',
        password: '',
        message: '',
    })


    let onsubmit = e => {
        e.preventDefault();
        if (cust.password==cust.confirmPassword) {
            const resetPass = {
                Password: cust.password,
                userName: userName.userName,
            }
            //console.log(this.state.name);
            axios.post('http://localhost:3001/customer/resetPassword', resetPass).then(res => {
                alert(res.data)
            }).catch(() => {
                alert('Error Occred')
            })
        }
        else {
            setCust({
                confirmPassword: cust.confirmPassword,
                password: cust.password,
                message: 'confirm password is not matched'
            })
        }
    }
    let onChangePassword = e => {
        setCust({
            confirmPassword: cust.confirmPassword,
            message: cust.message,
            password: e.target.value
        })
    }
    let onChangeConfirmPassword = e => {
        setCust({
            confirmPassword: e.target.value,
            password: cust.password,
            message: cust.message,
        })
    }
    const myStyle={
            backgroundImage: `url(${signb})` ,
            height:'100vh',
            fontSize:'50px',
            backgroundSize: 'cover',
    };
        return(
            <div style={myStyle}>
                <br />
                <br />
                <br />
                <br />
                <div className='resetDiv'>
                    <form onSubmit={onsubmit}>
                        <br />
                        <div className='resPass'>
                            Reset Password Now
                        </div>
                        <div className='loginheader'>
                            <div className='innerdiv'>
                                <br />
                                <br />
                                <br />
                                <span className='info'>
                                    Please Enter Your New Password
                                </span>
                                <br />
                                <br />
                                <input className='inputFieldsLarge' placeholder='New Password' required type='password' minLength="6" value={cust.password} onChange={onChangePassword} />
                                <br />
                                <br />
                                <input className='inputFieldsLarge' placeholder='Confirm Password' required type='password' value={cust.confirmPassword} onChange={onChangeConfirmPassword} />
                                <br />
                                <br />
                                <label id='errorMessage'>{cust.message} </label>  
                                <br />
                                <input className='signupButton' type='submit' value='Reset' />
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    
}
 
export default Reset_Password;