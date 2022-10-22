import axios from 'axios';
import React from 'react';
import logout from '../images/logout.svg'
import person from '../images/person.svg'
import wallet from '../images/wallet2.svg'
import cart from '../images/cart4.svg'
import home from '../images/house.svg'
import history from '../images/clock-history.svg'
import status from '../images/status.png'
import "../style.css";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

class SideBar extends React.Component {
    constructor() {
        super()
        this.state = {
        } 
    }
    onsubmit = e => {


    }

    render() {

        return (
            <div>
                <div>
                    <div className='col-auto min-vh-100 ' id='do'>
                            <ul>
                                <br/>
                                <li>
                                    <Link to = '/customer/profile' className='nav-link px-2' id= 'icons'>
                                        <i className='bi-house'/> <img className='ic' src={person}/>
                                    </Link>
                                </li>
                                <br />
                                <li>
                                    <Link to='/customer/cart' className='nav-link px-2' id= 'icons'>
                                        <i className='bi-house'/> <img className='ic' src={cart}/>
                                    </Link>
                                </li>
                                <br />
                                <li>
                                    <Link to='/customer/status' className='nav-link px-2' id= 'icons'>
                                        <i className='bi-house'/> <img className='ic' src={status}/>
                                    </Link>
                                </li>
                                <br/>
                                <li>
                                    <Link to='/customer/dashboard' className='nav-link px-2' id= 'icons'>
                                        <i className='bi-house'/> <img className='ic' src={home}/>
                                    </Link>
                                </li>
                                <br/>
                                <li>
                                    <Link to= '/customer/wallet' className='nav-link px-2' id= 'icons'>
                                        <i className='bi-house'/> <img className='ic' src={wallet}/>
                                    </Link>
                                </li>
                                <br />
                                <li>
                                    <Link to='/customer/history' className='nav-link px-2' id= 'icons'>
                                        <i className='bi-house'/> <img className='ic' src={history}/>
                                    </Link>
                                </li>
                                <br/>
                                <li>
                                    <Link to='/customer/login' className='nav-link px-2' id= 'icons' href='#'>
                                        <i className='BsTextareaT'/> <img className='ic' src={logout}/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
        );
    }
}
 
export default SideBar;