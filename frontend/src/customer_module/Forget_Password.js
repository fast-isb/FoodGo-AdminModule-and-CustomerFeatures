import axios from 'axios';
import React from 'react';
import signb from '../images/signb.jpeg'
import "../style.css";
import { Link } from "react-router-dom";


class Forget_Password extends React.Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            q1: '',
            q2: '',
            q3: '',
            error: '',
        } 
    }
    
    onsubmit = async e => {

        e.preventDefault();
        var obj = {
            user: this.state.userName
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
            this.setState({
                error: "incorrect information"
            })
        })

        if (status==false) {
            this.setState({
                error: "incorrect information"
            })
        }
        if (status==true) {
            if (result.Q1==this.state.q1) {
                if (result.Q2==this.state.q2) {
                    if (result.Q3==this.state.q3) {
                        
                    }
                    else {
                        this.setState({
                            error: "incorrect information"
                        })
                    }
                }
                else {
                    this.setState({
                        error: "incorrect information"
                    })
                }
            }
            else {
                this.setState({
                    error: "incorrect information"
                })
            }
        }  
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
    onChangeuserName = e => {
        this.setState({
            userName: e.target.value
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

                <div className='forgetDiv'>
                    <form onSubmit={this.onsubmit}>
                        <br />
                        <div className='forgetPass'>
                            Forget Password?
                        </div>
                        <div className='loginheader'>
                            <div className='innerdiv'>
                                <br />
                                <br />
                                <input className='inputFields' placeholder='User Name' required type='text' value={this.state.userName} onChange={this.onChangeuserName} />
                                <br />
                                <br />
                                <span className='info'>
                                    Please Answer Security Questions
                                </span>
                                <br />
                                <br />
                                <input className='inputFieldsLarge' placeholder='Enter city where you were born' required type='text' value={this.state.q1} onChange={this.onChangeQ1} />
                                <br />
                                <br />
                                <input className='inputFieldsLarge' placeholder='What was the name of your first pet' required type='text' value={this.state.q2} onChange={this.onChangeQ2} />
                                <br />
                                <br />
                                <input className='inputFieldsLarge' placeholder='Who was your favourite school teacher' required type='text' value={this.state.q3} onChange={this.onChangeQ3} />
                                <br />
                                <label id='errorMessage' className='erroeMessageGroup'>{this.state.error} </label>  
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
}
 
export default Forget_Password;