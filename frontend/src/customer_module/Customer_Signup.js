import axios from 'axios';
import React from 'react';
import signb from '../images/signb.jpeg'
import "../style.css";
import { Link } from "react-router-dom";

class Customer_Signup extends React.Component {
    constructor() {
        super()
        this.state = {
            fname: '',
            lname: '',
            address: '',
            phone: '',
            q1: '',
            q2: '',
            q3: '',
            email: '',
            username: '',
            password: '',
            mf: '',
            ml: '',
            mph: '',
            mu: '',
        } 
    }
    
    onsubmit = async e => {
        e.preventDefault();
        if (!(/\d/.test(this.state.fname))) {
            if (!(/\d/.test(this.state.lname))) {
                if (/^\d+$/.test(this.state.phone)) {
                    const signUpObject = {
                        fName: this.state.fname,
                        lName: this.state.lname,
                        Phone: this.state.phone,
                        Address: this.state.address,
                        Q1: this.state.q1,
                        Q2: this.state.q2,
                        Q3: this.state.q3,
                        Email: this.state.email,
                        userName: this.state.username,
                        userPassword: this.state.password,
                    }
                    //console.log(this.state.username);

                    const status= await axios.post('http://localhost:3001/customer/signup', signUpObject)
                    .then(res => {
                        if (res.data == 'exist') {
                            this.setState({
                                mu:'This Username already exists'
                            })
                        }
                        else {
                            
                            alert("Your Application has been submited! You can be able to login once admin approve your request")
                            
                        }
                    })    
                }
               else {
                    this.setState({
                        mph:'Invalid Phone Number'
                    })
                }
            }
            else {
                this.setState({
                    ml:'Last name should not contain any Number'
                })
            }
        }
        else {
            this.setState({
                mf:'First name should not contain any Number'
            })
        }
    }
    onChangeUserName = e => {
        this.setState({
            username: e.target.value
        })
    }
    onChangefname = e => {
        this.setState({
            fname: e.target.value
        })
    }
    onChangelname = e => {
        this.setState({
            lname: e.target.value
        })
    }
    onChangePhone = e => {
        this.setState({
            phone: e.target.value
        })
    }
    onChangePassword = e => {
        this.setState({
            password: e.target.value
        })
    }
    onChangeEmail = e => {
        this.setState({
            email: e.target.value
        })
    }
    onChangeAddress = e => {
        this.setState({
            address: e.target.value
        })
    }
    onChangeQ1 = e => {
        this.setState({
            q1: e.target.value
        })
    }
    onChangeQ2 = e => {
        this.setState({
            q2: e.target.value
        })
    }
    onChangeQ3 = e => {
        this.setState({
            q3: e.target.value
        })
    }
    render() {
        const myStyle={
            backgroundImage: `url(${signb})` ,
            height:'100vh',
            fontSize:'50px',
            backgroundSize: 'cover',
        };
        return (
            <div style={myStyle}>
                <br />
                <br />
                <br />
                <br />

                <div className='signUpMainDiv'>
                    <br />
                    <br/>
                    <h4 className='mainHead'>
                        Welcome to FoodGo
                    </h4>
                    <span className='mainText'>
                        Order your Food Instantly!
                    </span>
                </div>
                <br/>
                <div className='formDiv'>
                    <form onSubmit={this.onsubmit}>
                        <br/>
                        <div className='signup'>
                            Sign Up
                        </div>
                        <div className='header'>
                            <span>
                                now to explore and use the FoodGo
                            </span>
                            <br />
                            <br />
                            <div className='innerdiv'>
                                <span className='info'>
                                    Your Info
                                </span>
                                <br />
                                <br />
                                <input data-testid='fname' className='inputFields' placeholder='First Name' required type='text' value={this.state.fname} onChange={this.onChangefname} />
                                <label id='errorMessage' className='erroeMessageGroup'>{this.state.mf} </label>  
                                <br />
                                <br />
                                <input data-testid='lname' className='inputFields' placeholder='Last Name' required type='text' value={this.state.lname} onChange={this.onChangelname} />
                                <label id='errorMessage' className='erroeMessageGroup'>{this.state.ml} </label>  
                                <br />
                                <br />
                                <input data-testid='uname'  className='inputFieldsLarge' placeholder='User Name' required type='text' value={this.state.username} onChange={this.onChangeUserName} />
                                <label id='errorMessage' className='erroeMessageGroup'>{this.state.mu} </label>  
                                <br />
                                <br />
                                <input data-testid='pass'  className='inputFieldsLarge' placeholder='Password' required type='password' minLength="6" value={this.state.password} onChange={this.onChangePassword} />
                                <br />
                                <br />
                                <input  data-testid='email'  className='inputFieldsLarge' placeholder='Email' required type='email' value={this.state.email} onChange={this.onChangeEmail} />
                                <br />
                                <br />
                                <input data-testid='phone'  className='inputFieldsLarge' placeholder='Phone' required type='tel' minLength="11" maxLength="11" value={this.state.phone} onChange={this.onChangePhone} />
                                <label id='errorMessage' className='erroeMessageGroup'>{this.state.mph} </label>  
                                <br />
                                <br />
                                <input data-testid='address' className='inputFieldsAdd' placeholder='Address' required type='text' value={this.state.address} onChange={this.onChangeAddress} />
                                <br />
                                <br />
                                <span className='info'>
                                    Security Questions
                                </span>
                                <br />
                                <br />
                                <input data-testid='q1'  className='inputFieldsLarge' placeholder='Enter city where you were born' required type='text' value={this.state.q1} onChange={this.onChangeQ1} />
                                <br />
                                <br />
                                <input  data-testid='q2'  className='inputFieldsLarge' placeholder='What was the name of your first pet' required type='text' value={this.state.q2} onChange={this.onChangeQ2} />
                                <br />
                                <br />
                                <input data-testid='q3' className='inputFieldsLarge' placeholder='Who was your favourite school teacher' required type='text' value={this.state.q3} onChange={this.onChangeQ3} />
                                <br />
                                <br />
                                <input data-testid='checkSignBut' className='signupButton' type='submit' value='Sign UP' />
                                <br />
                                <br />
                                <div className='loginText'>
                                    <span>
                                        Already have an Account? |  
                                    </span>
                                    <label>
                                        <Link data-testid='logcheck' to='/customer/login' >
                                            | Login
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
}
 
export default Customer_Signup;