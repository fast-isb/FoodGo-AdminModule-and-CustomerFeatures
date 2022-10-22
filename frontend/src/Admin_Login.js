import axios from 'axios';
import React from 'react';
import "./style.css";

class Admin_Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            message: '',
        } 
    }
    onsubmit = e => {
        const admin = {
            uname: 'admin',
            password: 'asd123',
        }
       // e.preventDefault();
        if (this.state.username!=null && this.state.password!=null) {
         
            const loginObject = {
                userName: this.state.username,
                userPassword: this.state.password,
            }
            //console.log(this.state.name);

            axios.post('http://localhost:3001/users/login', loginObject)
            .then(res => {
                console.log(res.data)
            })
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

        return (
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className='adminLogin'>
                    <form onSubmit={this.onsubmit}>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className='login'>
                            Log In
                        </div>
                        <div className='loginheader'>
                            <span>
                                now to Manage all users of FoodGo
                            </span>
                            <br />
                            <div className='innerdiv'>
                                <br />
                                <br />
                                <input className='inputFieldsLarge' placeholder='User Name' required type='text' value={this.state.username} onChange={this.onChangeUserName} />
                                <br />
                                <br />
                                <input className='inputFieldsLarge' placeholder='Password' required type='password' value={this.state.password} onChange={this.onChangePassword} />
                                <br />
                                <br />
                                <label id='errorMessage'>{this.state.message} </label>  
                                <br/>
                                <input className='signupButton' type='submit' value='Log In' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Admin_Login;