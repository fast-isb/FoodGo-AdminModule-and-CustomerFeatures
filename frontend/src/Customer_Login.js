import axios from 'axios';
import React from 'react';
import signb from './signb.jpeg'
import "./style.css";

class Customer_Login extends React.Component {
    state = {
        username: '',
        password: '',
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
                <br/>
                <div className='signUpMainDiv'>
                    <br/>
                    <h4 className='mainHead'>
                        Welcome to FoodGo
                    </h4>
                    <span className='mainText'>
                        Order your Food Instantly!
                    </span>
                </div>
                <div className='loginFormDiv'>
                    <form>
                        <br />
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
                                <input className='inputFieldsLarge' placeholder='User Name' required type='text' value={this.state.name} onChange={this.onChangedName} />
                                <br />
                                <br />
                                <input className='inputFieldsLarge' placeholder='Password' required type='password' value={this.state.name} onChange={this.onChangedName} />

                                <br />
                                <br />
                                <br/>
                                <input className='signupButton' type='submit' value='Log In' />
                                <br />
                                <br />
                                <div className='loginText'>
                                    <span>
                                        Can't Log in? | 
                                    </span>
                                    <label>
                                        <a href='#' >
                                            | Forget Password
                                        </a>
                                    </label>
                                </div>
                                <br />
                                <div className='loginText'>
                                    <span>
                                        Don't have an Account? | 
                                    </span>
                                    <label>
                                        <a href='#' >
                                            | Sign Up
                                        </a>
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