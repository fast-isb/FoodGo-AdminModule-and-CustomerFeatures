import axios from 'axios';
import React from 'react';
import signb from './signb.jpeg'
import "./style.css";

class Reset_Password extends React.Component {
    state = {
        confirmPassword: '',
        password: '',
    } 
    onsubmit = e => {
        e.preventDefault();
        if (this.state.password==this.state.confirmPassword) {
            const resetPass = {
                Password: this.state.password,
            }
            //console.log(this.state.name);
            axios.post('http://localhost:3001/users/name', resetPass)
            .then(res => {
                    console.log(res.data);
            })
        }
    }
    onChangePassword = e => {
        this.setState({
            password: e.target.value
        })
    }
    onChangeConfirmPassword = e => {
        this.setState({
            confirmPassword: e.target.value
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
                                <input className='inputFieldsLarge' placeholder='New Password' required type='password' minlength="6" value={this.state.password} onChange={this.onChangePassword} />
                                <br />
                                <br />
                                <input className='inputFieldsLarge' placeholder='Confirm Password' required type='password' value={this.state.confirmPassword} onChange={this.onChangeConfirmPassword} />
                                <br />
                                <br />
                                <br />
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