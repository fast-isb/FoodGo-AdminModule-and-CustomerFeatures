/**
 * This is a basic starting point of the assignment
 * Modify the code according to your own needs and requirements
 */

//const express = require('express')
import express from 'express'; // <-- Module Style import
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
//import { } from "dotenv/config";
mongoose.connect('mongodb+srv://zain:Zain03047003007@cluster0.jafhv7i.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
});


// Importing user route
import customerRouter from './routes/customer.js';
import adminRouter from './routes/admin.js';

// const router = require('router')

// const bodyParser = require('body-parser')

const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(cors());
// Adding a Router
app.use('/customer', customerRouter);
app.use('/admin', adminRouter);

app.get('/', (req, res) => {
    res.send('Hello Universe!')
})

app.get('/todos', (req, res) => {
    res.send('A list of todo items will be returned')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Posting a Request')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
