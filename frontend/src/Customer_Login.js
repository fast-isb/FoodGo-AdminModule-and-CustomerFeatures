import axios from 'axios';
import React from 'react';
import signb from './signb.jpeg'
import "./style.css";

class Customer_Login extends React.Component {
    state = {
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
                <div className='formDiv'>
                    <form>
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
                            <br />
                            <div className='innerdiv'>
                                <span className='info'>
                                    Your Info
                                </span>
                                <br />
                                <br />
                                <input className='inputFields' placeholder='First Name' required type='text' value={this.state.name} onChange={this.onChangedName} />
                                <br />
                                <br />
                                <input className='inputFields' placeholder='Last Name' required type='text' value={this.state.name} onChange={this.onChangedName} />
                                <br />
                                <br />
                                <input className='inputFields' placeholder='User Name' required type='text' value={this.state.name} onChange={this.onChangedName} />
                                <br />
                                <br />
                                <input className='inputFieldsLarge' placeholder='Password' required type='password' minlength="6" value={this.state.name} onChange={this.onChangedName} />
                                <br />
                                <br />
                                <input className='inputFieldsLarge' placeholder='Email' required type='email' value={this.state.name} onChange={this.onChangedName} />
                                <br />
                                <br />
                                <input className='inputFieldsLarge' placeholder='Phone' required type='tel' minlength="11" maxlength="11" value={this.state.name} onChange={this.onChangedName} />
                                <br />
                                <br />
                                <input className='inputFieldsAdd' placeholder='Address' required type='text' value={this.state.name} onChange={this.onChangedName} />
                                <br />
                                <br />
                                <br />
                                <span className='info'>
                                    Security Questions
                                </span>
                                <br />
                                <br />
                                <input className='inputFieldsLarge' placeholder='Enter your the city where you were born' required type='text' value={this.state.name} onChange={this.onChangedName} />
                                <br />
                                <br />
                                <input className='inputFieldsLarge' placeholder='What was the name of your first pet' required type='text' value={this.state.name} onChange={this.onChangedName} />
                                <br />
                                <br />
                                <input className='inputFieldsLarge' placeholder='What was the name of your favouate school teacher' required type='text' value={this.state.name} onChange={this.onChangedName} />
                                <br />
                                <br />
                                <br/>
                                <input className='signupButton' type='submit' value='Sign UP' />
                                <br />
                                <br />
                                <div className='loginText'>
                                    <span>
                                        Already have an Account?  
                                    </span>
                                    <label>
                                        <a href='#' >
                                            Login
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