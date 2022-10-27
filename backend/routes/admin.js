import express, { json } from 'express';

// const express = require('express');
const router = express.Router();
import customer from '../models/Customer.model.js'


router.post('/accept_appliaction', (req, res) => {
    var required = {
        userName: req.body.userName
    }
    var temp = req.body
    temp.stats = 'accepted'
    customer.updateOne(required, temp).then(() => {
        res.json('Application has been accepted')
    }).catch(() => {
        res.json('application cannot be accepted i.e., there wan an error while updating the information')
    })
})

router.post('/reject_appliaction', (req, res) => {
    var required = {
        userName: req.body.userName
    }
    var temp = req.body
    temp.stats = 'accepted'
    customer.deleteOne(required).then(() => {
        res.json("Application has been rejected");
    }).catch((err) => {
        res.json('application cannot be rejected i.e., there wan an error while deleting the information')
    });
})

export default router;

// module.exports = router;


