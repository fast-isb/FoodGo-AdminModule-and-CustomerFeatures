import axios from 'axios';
import React from 'react';
import p1 from './slide3.webp'
import p2 from './p3.png'
import p3 from './slide1.jpg'
import logout from './logout.svg'
import person from './person.svg'
import logo from './logo.png'
import wallet from './wallet2.svg'
import cart from './cart4.svg'
import rest from './rest.jpeg'
import home from './house.svg'
import food from './food.jpg'
import history from './clock-history.svg'
import status from './status.png'
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
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
                <div className='container-fluid' >
                    <div className='row' id='fix' >
                        <div className='col-auto min-vh-100 ' id='do'>
                            <ul>
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
                        <div className='col' id='para'>
                            <h2>
                                How it Works
                            </h2>
                            <span>
                                FoodGo app has the connction of thousands of restaurants, rider and customers. On avarage abouud
                                two hundreds of peaple sign up the app daily. These peaple inclusdes customers, riders as well as 
                                restaurant managers. As a Customer, you can order your food in just a few steps. You can simply search
                                your food of your choice, order it, and pay for it. After this, th rider which would be nearest to you would
                                pick and deliver your order with in 20 minutes only! You would receive your orders food at your door step with
                                in the mentioned time.
                            </span>
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
                            <br />
                            <h2>
                                Search you Food Now!
                            </h2>
                        </div>
                        <br/>
                        <div className='col' id='cosc'  > 
                            <Carousel variant="dark">
                                <Carousel.Item className='dem'>
                                    <img
                                        className="d-block w-100"
                                        src={p3}
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h5>FoodGo</h5>
                                        <p>
                                            Ordering your favourate food is just one click away.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className='dem'>
                                    <img
                                        className="d-block w-100"
                                        src={p1}
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h5>FoodGo</h5>
                                        <p>
                                            You can now also choose your food by searching your favourate Restaurant.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className='dem'>
                                    <img
                                        className="d-block w-100"
                                        src={p2}
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h5>FoodGo</h5>
                                        <p>
                                            Your foodwould be deliver on your door step.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className='col' id='firstCard'>
                            <Card style={{ width: '18rem' }} id='controller'>
                                <Card.Img variant="top" src={rest} id='restimg' />
                                <Card.Body id=''>
                                    <Card.Title>Search By Restaurant</Card.Title>
                                    <Card.Text>
                                        Now you can search your favourate Restaurant and oder your food
                                    </Card.Text>
                                    <Button variant="primary">Search Now</Button>
                                </Card.Body>
                            </Card>     
                        </div>
                        <div className='col' id='secondCard'>
                            <Card style={{ width: '18rem' }} id='controller'>
                                <Card.Img variant="top" src={food} id='restimg' />
                                <Card.Body id=''>
                                    <Card.Title>Search By Food Item</Card.Title>
                                    <Card.Text>
                                        Now you can search you favourite Food item
                                    </Card.Text>
                                    <Button variant="primary">Search Now</Button>
                                </Card.Body>
                            </Card>     
                        </div>
                    </div>
                </div>
                                            
                    
            </div>
        );
    }
}
 


export default Customer_Dashboard;