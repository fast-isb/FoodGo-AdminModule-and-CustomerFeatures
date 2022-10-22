import axios from 'axios';
import React from 'react';
import signb from '../images/signb.jpeg'
import "../style.css";
import { Link } from "react-router-dom";


class Forget_Password extends React.Component {
    constructor() {
        super()
        this.state = {
            q1: '',
            q2: '',
            q3: '',
        } 
    }
    
    onsubmit = e => {
        e.preventDefault();
        const forgetObj = {
            Q1: this.state.q1,
            Q2: this.state.q2,
            Q3: this.state.q3,
        }
        //console.log(this.state.name);
        axios.post('http://localhost:3001/users/name', forgetObj)
            .then(res => {
                console.log(res.data);
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
                                <br />
                                <span className='info'>
                                    Please Answer Security Questions
                                </span>
                                <br />
                                <br />
                                <input className='inputFieldsLarge' placeholder='Enter your the city where you were born' required type='text' value={this.state.q1} onChange={this.onChangeQ1} />
                                <br />
                                <br />
                                <input className='inputFieldsLarge' placeholder='What was the name of your first pet' required type='text' value={this.state.q2} onChange={this.onChangeQ2} />
                                <br />
                                <br />
                                <input className='inputFieldsLarge' placeholder='What was the name of your favouate school teacher' required type='text' value={this.state.q3} onChange={this.onChangeQ3} />
                                <br />
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