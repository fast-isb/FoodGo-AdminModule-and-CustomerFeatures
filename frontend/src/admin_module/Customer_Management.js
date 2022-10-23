import axios from 'axios';
import React from 'react';
import "../style.css";
import { Link } from "react-router-dom";
import {Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



let Trow = props => {
    return(
        <tr>
            <td>
                {props.customer.fName}
            </td>
            <td>
                {props.customer.lName}
            </td>
            <td>
                {props.customer.userName}
            </td>
            <td>
                {props.customer.Email}
            </td>
            <td>
                {props.customer.Phone}
            </td>

            <td>
                <a href='#' onClick={() => { props.method(props.customer.userName) }}>Approve |</a>
                <a href='#' onClick={() => { props.method2( props.customer.userName )}}>| Reject</a>
            </td>
        </tr>
    )
    
}


class Customer_Management extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            customers: [],
        } 
    }

    acceptapplication=async (user)=> {
        const status = await axios.get('http://localhost:3001/customer/list').then(res => {
            this.setState({
                customers: this.state.customers.filter(element=>element.userName!=user)
            })
        })
    }
    rejectapplication=async (user)=> {
        const status = await axios.get('http://localhost:3001/customer/list').then(res => {
            this.setState({
                customers: this.state.customers.filter(element=>element.userName!=user)
            })
        })
    }
    componentDidMount = async () => {
        const status = await axios.get('http://localhost:3001/customer/list')
        const temp= status.data.filter(element=>element.stats!='accepted')
        this.setState({
            customers:temp
        })
        console.log(this.state.customers)
    }
    displayCustomerList = () => {
        return this.state.customers.map(temp => {
            return <Trow customer={temp} method={this.acceptapplication} method2={ this. rejectapplication } key={ temp._id } />
        })
    }
    render() {
        return (
            <div>
                <br />
                <Form>
                    <h3>Customer Applications</h3>
                    <br />                
                    <table className='table' >
                        <thead className='thead-light'>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>{ this.state.check}</th>
                                <th>Phone Number</th>
                                <th>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.displayCustomerList()}
                        </tbody>
                    </table>
                </Form>
                
            </div>
        );
    }
}
 
export default Customer_Management;



