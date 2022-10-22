import axios from 'axios';
import React from 'react';
import logout from './logout.svg'
import person from './person.svg'
import wallet from './wallet2.svg'
import cart from './cart4.svg'
import home from './house.svg'
import history from './clock-history.svg'
import status from './status.png'
import "./style.css";
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
                                    <a className='nav-link px-2' id= 'icons'>
                                        <i className='bi-house'/> <img className='ic' src={person}/>
                                    </a>
                                </li>
                                <br />
                                <li>
                                    <a className='nav-link px-2' id= 'icons'>
                                        <i className='bi-house'/> <img className='ic' src={cart}/>
                                    </a>
                                </li>
                                <br />
                                <li>
                                    <a className='nav-link px-2' id= 'icons'>
                                        <i className='bi-house'/> <img className='ic' src={status}/>
                                    </a>
                                </li>
                                <br/>
                                <li>
                                    <a className='nav-link px-2' id= 'icons'>
                                        <i className='bi-house'/> <img className='ic' src={home}/>
                                    </a>
                                </li>
                                <br/>
                                <li>
                                    <a className='nav-link px-2' id= 'icons'>
                                        <i className='bi-house'/> <img className='ic' src={wallet}/>
                                    </a>
                                </li>
                                <br />
                                <li>
                                    <a className='nav-link px-2' id= 'icons'>
                                        <i className='bi-house'/> <img className='ic' src={history}/>
                                    </a>
                                </li>
                                <br/>
                                <li>
                                    <a className='nav-link px-2' id= 'icons' href='#'>
                                        <i className='BsTextareaT'/> <img className='ic' src={logout}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
        );
    }
}
 
export default SideBar;