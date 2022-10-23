import axios from 'axios';
import React from 'react';
import "../style.css";

import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerObject = (props) => {
  return (
        <tr>
                <td>
                    {this.props.customer.fName}
                </td>
                <td>
                    {this.props.customer.lName}
                </td>
                <td>
                    {props.customer.userName}
                </td>
                <td>
                    {props.customer.Phone}
                </td>
                <td>
                    {props.customer.email}
                </td>
                <td>
                    <a href='#' onClick={() => { props.acceptApplication(props.customer.userName) }}>Approve</a>
                </td>
            </tr>
  );
};

 
export default CustomerObject;