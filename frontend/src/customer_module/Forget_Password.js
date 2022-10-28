import axios from 'axios';
import React from 'react';
import signb from '../images/signb.jpeg'
import { useState } from 'react';
import "../style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Forget_Password(){
        let navigate= useNavigate()
        const [cust, setCust] = useState({
            userName: '',
            q1: '',
            q2: '',
            q3: '',
            error: '',
        }) 
    
    onsubmit = async e => {

        e.preventDefault();
        var obj = {
            user: cust.userName
        }
        var status = false
        var result
        await axios.post('http://localhost:3001/customer/getUser', obj).then(res => {
            if (res.data[0] === undefined) {
                status = false
            }
            else {
                status = true
                result = res.data[0]
            }
        }).catch(() => {
            console.log('error occured')
            setCust({
                q3: cust.q3,
                userName: cust.userName,
                q1: cust.q1,
                q2: cust.q2,
                error: "incorrect information"
            })
        })

        if (status==false) {
            setCust({
                q3: cust.q3,
                userName: cust.userName,
                q1: cust.q1,
                q2: cust.q2,
                error: "incorrect information"
            })
        }
        if (status==true) {
            if (result.Q1==cust.q1) {
                if (result.Q2==cust.q2) {
                    if (result.Q3 == cust.q3) {
                        if (result.stats == 'accepted') {
                            navigate("/customer/reset", {
                                state: {
                                    userName: cust.userName,
                                },
                            });
                        }
                        else {
                            setCust({
                                q3: cust.q3,
                                userName: cust.userName,
                                q1: cust.q1,
                                q2: cust.q2,
                                error: "Your account has not been approved yet by Admin"
                            })
                        }
                    
                    }
                    else {
                        setCust({
                            q3: cust.q3,
                            userName: cust.userName,
                            q1: cust.q1,
                            q2: cust.q2,
                            error: "incorrect information"
                        })
                    }
                }
                else {
                    setCust({
                        q3: cust.q3,
                        userName: cust.userName,
                        q1: cust.q1,
                        q2: cust.q2,
                        error: "incorrect information",
                    })
                }
            }
            else {
                setCust({
                    q3: cust.q3,
                    userName: cust.userName,
                    q1: cust.q1,
                    q2: cust.q2,
                    error: "incorrect information"
                })
            }
        }  
    }
    let onChangeQ1 = e => {
        setCust({
            userName: cust.userName,
            q1: e.target.value,
            q2: cust.q2,
            q3: cust.q3,
            error: cust.error
        })
    }
    let onChangeQ2 = e => {
        setCust({
            userName: cust.userName,
            q1: cust.q1,
            q3: cust.q3,
            error: cust.error,
            q2: e.target.value
        })
    }
    let onChangeQ3 = e => {
        setCust({
            q3: e.target.value,
            userName: cust.userName,
            q1: cust.q1,
            q2: cust.q2,
            error: cust.error
        })
    }
    let onChangeuserName = e => {
        setCust({
            userName: e.target.value,
            q1: cust.q1,
            q2: cust.q2,
            q3: cust.q3,
            error: cust.error
        })
    }
    const myStyle={
            backgroundImage: `url(${signb})` ,
            height:'100vh',
            fontSize:'50px',
            backgroundSize: 'cover',
    }
    return (
        
        
            <div style={myStyle}>
                <br />
                <br />
                <br />
                <br />
                <br/>

                <div className='forgetDiv'>
                    <form onSubmit={onsubmit}>
                        <br />
                        <div className='forgetPass'>
                            Forget Password?
                        </div>
                        <div className='loginheader'>
                            <div className='innerdiv'>
                                <br />
                                <br />
                                <input className='inputFields' placeholder='User Name' required type='text' value={cust.userName} onChange={onChangeuserName} />
                                <br />
                                <br />
                                <span className='info'>
                                    Please Answer Security Questions
                                </span>
                                <br />
                                <br />
                                <input className='inputFieldsLarge' placeholder='Enter city where you were born' required type='text' value={cust.q1} onChange={onChangeQ1} />
                                <br />
                                <br />
                                <input className='inputFieldsLarge' placeholder='What was the name of your first pet' required type='text' value={cust.q2} onChange={onChangeQ2} />
                                <br />
                                <br />
                                <input className='inputFieldsLarge' placeholder='Who was your favourite school teacher' required type='text' value={cust.q3} onChange={onChangeQ3} />
                                <br />
                                <label id='errorMessage' className='erroeMessageGroup'>{cust.error} </label>  
                                <br />
                                <br/>
                                <input className='signupButton' type='submit' value='Continue' />
                                <br />
                                <br />
                                <div className='loginText'>
                                    <span>
                                        Do You Want to Login Now? | 
                                    </span>
                                    <label>
                                        <Link to='/customer/login'  >
                                            | Log In
                                        </Link>
                                    </label>
                                </div>
                                <br />
                                <div className='loginText'>
                                    <span>
                                        Don't have an Account? | 
                                    </span>
                                    <label>
                                        <Link to='/customer/signup' >
                                            | Sign Up
                                        </Link>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
   
}
 
export default Forget_Password;