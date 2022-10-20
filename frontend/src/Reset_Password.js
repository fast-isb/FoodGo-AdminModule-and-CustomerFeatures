import axios from 'axios';
import React from 'react';
import signb from './signb.jpeg'
import "./style.css";

class Reset_Password extends React.Component {
    state = {
        confirmPassword: '',
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

                <div className='resetDiv'>
                    <form>
                        <br />
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
                                <input className='inputFieldsLarge' placeholder='New Password' required type='password' minlength="6" value={this.state.name} onChange={this.onChangedName} />
                                <br />
                                <br />
                                <input className='inputFieldsLarge' placeholder='Confirm Password' required type='password' value={this.state.name} onChange={this.onChangedName} />
                                <br />
                                <br />
                                <br/>
                                <input className='signupButton' type='submit' value='Reset Password' />
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Reset_Password;