import express, { json } from 'express';

// const express = require('express');
const router = express.Router();
import customer from '../models/Customer.model.js'

router.get('/', (req, res) => {
    var cus = customer.find().
    res.send(cu)
    
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

router.post('/name', (req, res) => {
    console.log(req.body);
    res.json('name received');
})

export default router;

// module.exports = router;