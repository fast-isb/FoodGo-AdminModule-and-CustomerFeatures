import axios from 'axios';
import React from 'react';
import signb from './signb.jpeg'
import "./style.css";

class Customer_Dashboard extends React.Component {
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
                
            </div>
        )
    }
}
 
export default Customer_Dashboard;