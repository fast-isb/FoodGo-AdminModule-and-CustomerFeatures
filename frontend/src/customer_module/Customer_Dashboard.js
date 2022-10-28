import axios from 'axios';
import React from 'react';
import p1 from '../images/slide3.webp'
import p2 from '../images/p3.png'
import p3 from '../images/slide1.jpg'
import rest from '../images/rest.jpeg'
import SideBar from './SideBar.js';
import food from '../images/food.jpg'
import "../style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Customer_Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            message: '',
            logedin: '',
        } 
    }
    componentDidMount = async () => {
        var result
        const tokenObj = {
            token: window.localStorage.getItem("token")
        }
        var result = await axios.post('http://localhost:3001/customer/fetch-user-after-login', tokenObj)
        console.log(result.data);
        this.setState({
            logedin: result.data
        })
        window.localStorage.clear()
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
                        <SideBar/>
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
                                            Your food would be deliver on your door step.
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
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 


export default Customer_Dashboard;