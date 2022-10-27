import express, { json } from 'express';

// const express = require('express');
const router = express.Router();
import customer from '../models/Customer.model.js'

router.get('/list', (req, res) => {
    customer.find().then(customers => res.json(customers)).catch(() => {
        res.send('could not be fatched')
    })
})

router.post('/getUser', (req, res) => {
    
    const user = req.body.user
    // console.log(req.body.user)
    customer.find({userName: user}).then((customers) => {
       // console.log(res.json(customers))
        //console.log("dlckldac")
        res.json(customers)
    }).catch(() => {
        console.log('could not be fatched')
    })
})

router.post('/signup', (req, res) => {
    const fName = req.body.fName
    const lName = req.body.lName
    const Phone= req.body.Phone
    const Address = req.body.Address
    const Q1 = req.body.Q1
    const Q2 = req.body.Q2
    const Q3 = req.body.Q3
    const Email = req.body.Email
    const userName = req.body.userName
    const userPassword = req.body.userPassword
    const newCustomer = new customer({
        fName,
        lName,
        Phone,
        Address,
        Q1,
        Q2,
        Q3,
        Email,
        userName,
        userPassword
    })
    newCustomer.save().then(() => {
        res.json('sent')
    }).catch(() => {
        res.json('exist')
    })
})


export default router;

// module.exports = router;