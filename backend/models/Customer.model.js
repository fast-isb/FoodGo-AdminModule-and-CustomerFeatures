import mongoos from 'mongoose'
const Schema = mongoos.Schema

const customerSchema = new Schema({
    fName: {
        type: String,
        required: true,
    },
    lName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    userPassword: {
        type: String,
        required: true,
        minlength: 6,
    },
    Phone: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    Q1: {
        type: String,
        required: true,
    },
    Q2: {
        type: String,
        required: true,
    },
    Q3: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    stats: {
        type: String,
        default: 'applied',
    }

}, {
    timestemos: true,
})

const Customer = mongoos.model('Customer', customerSchema)
export default Customer;