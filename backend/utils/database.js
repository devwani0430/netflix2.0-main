import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path:"../.env"
})

const databaseConnection = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => {
      console.log('Connected to MongoDB');
    }).catch(err => {
      console.error('Error connecting to MongoDB', err);
    });
    
};
export default databaseConnection;


// const mongoose = require('mongoose');


