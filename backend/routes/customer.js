import express, { json } from 'express';

// const express = require('express');
const router = express.Router();
import customer from '../models/Customer.model.js'
import token from 'jsonwebtoken'
const secret='adnjkb2hf9hfjb()!#E+!#e?><":"{|wcwec}{{}}{|}DC"Wcewc?>WE<C"_P_+WEcwcqwcqw23'
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


router.post('/login', async (req, res) => {
    
    const user = req.body.userName
    var isFound = await customer.find({ userName: user })
    if (!isFound) {
        res.send('user could not be found')
    }
    else {
        if (isFound[0].userPassword == req.body.userPassword) {
            const create_token = token.sign({userName: isFound[0].userName}, secret)
            if (res.status(201)) {
                return res.json({ stat: 'success', tok: create_token })
                
            }
            else {
                return res.json('error occured')
            }
        }
        else {
            res.send('error')
        }
    }
    
    
})


router.post('/fetch-user-after-login', async (req, res) => {
    const istoken = req.body.token
    try {
        const customers = token.verify(istoken, secret)
        const user = customers.userName
        customer.find({userName: user}).then((customers) => {
            res.json(customers)
        }).catch(() => {
            console.log('could not be fatched')
        }) 
    } catch (error) {
        
    }
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

router.post('/resetPassword', (req, res) => {
    var required = {
        userName: req.body.userName
    }
    var temp = req.body
    temp.userPassword = req.body.Password
    customer.updateOne(required, temp).then(() => {
        res.json('Password has been changed Successfully!')
    }).catch(() => {
        res.json('there was an error while changing password')
    })
})


export default router;

// module.exports = router;