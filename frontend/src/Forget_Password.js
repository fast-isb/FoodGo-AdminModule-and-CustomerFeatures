import axios from 'axios';
import React from 'react';
import signb from './signb.jpeg'
import "./style.css";

class Forget_Password extends React.Component {
    state = {
        q1: '',
        q2: '',
        q3: '',
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

                <div className='forgetDiv'>
                    <form>
                        <br />
                        <br />
                        <div className='forgetPass'>
                            Forget Password?
                        </div>
                        <div className='loginheader'>
                            <div className='innerdiv'>
                                <br />
                                <br />
                                <br />
                                <span className='info'>
                                    Please Answer Security Questions
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
                                <input className='signupButton' type='submit' value='Reset Password' />
                                <br />
                                <br />
                                <div className='loginText'>
                                    <span>
                                        Do You Want to Login Now? | 
                                    </span>
                                    <label>
                                        <a href='#' >
                                            | Log In
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
 
export default Forget_Password;