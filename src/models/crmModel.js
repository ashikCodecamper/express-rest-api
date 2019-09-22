import mongoose from 'mongoose';
import { stringify } from 'querystring';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    company : {
        type: stringify
    },
    phone: {
        type: Number
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});