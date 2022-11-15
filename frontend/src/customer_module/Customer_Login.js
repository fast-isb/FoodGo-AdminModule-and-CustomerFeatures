import axios from 'axios';
import React from 'react';
import signb from '../images/signb.jpeg'
import "../style.css";
import { Link } from "react-router-dom";



class Customer_Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            message: '',
        } 
    }
    onsubmit = async e => {
        e.preventDefault();
        if (this.state.username!=null && this.state.password!=null) {
         
            const loginObject = {
                userName: this.state.username,
                userPassword: this.state.password,
            }
            //console.log(this.state.name);
            var result
            await axios.post('http://localhost:3001/customer/login', loginObject)
            .then(res => {
                console.log(res.data)
                result= res.data
            })
            console.log(result.stat)
            if (result.stat == 'success') {
                window.localStorage.setItem("token", result.tok) 
                window.location.href='/customer/dashboard'
            }
            else {
                this.setState({
                    message: 'invalid information'
                })
            }
        }
    }
    onChangeUserName = e => {
        this.setState({
            username: e.target.value
        })
    }

    onChangePassword = e => {
        this.setState({
            password: e.target.value
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
                <div className='loginFormDiv'>
                    <form onSubmit={this.onsubmit}>
                        <br />
                        <div className='login'>
                            Log In
                        </div>
                        <div className='loginheader'>
                            <span>
                                now to explore and use the FoodGo
                            </span>
                            <br />
                            <div className='innerdiv'>
                                <br />
                                <br />
                                <input data-testid='uname' className='inputFieldsLarge' placeholder='User Name' required type='text' value={this.state.username} onChange={this.onChangeUserName} />
                                <br />
                                <br />
                                <input data-testid='pass' className='inputFieldsLarge' placeholder='Password' required type='password' value={this.state.password} onChange={this.onChangePassword} />
                                <br />
                                <br />
                                <label id='errorMessage'>{this.state.message} </label>  
                                <br/>
                                <input data-testid='checklogin' className='signupButton' type='submit' value='Log In' />
                                <br />
                                <br />
                                <div className='loginText'>
                                    <span>
                                        Can't Log in? | 
                                    </span>
                                    <label>
                                        <Link data-testid='forget' to='/customer/forgetpassword' >
                                            | Forget Password
                                        </Link>
                                    </label>
                                </div>
                                <br />
                                <div className='loginText'>
                                    <span>
                                        Don't have an Account? | 
                                    </span>
                                    <label>
                                        <Link  data-testid='sign' to='/customer/signup' >
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
}
 
export default Customer_Login;