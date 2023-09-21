const mongoose = require('mongoose');
const express = require('express');
// const ChannelModel = require('./models/channels');
// const bodyParser = require('body-parser');
// const User = require('./models/User');
const app = express();
const PORT = 5000;
const dbUrl = 'mongodb+srv://kyathisri:kks@cluster0.v9fmrxx.mongodb.net/hackathon'
const connectionParams = {
 useNewUrlParser: true,
 useUnifiedTopology: true
};
const connectDB = async() =>{
    mongoose.connect(dbUrl, connectionParams)
 .then(() => {
 console.log('Connected to the database');
 })
 .catch((err) => {
 console.error(`Error connecting to the database. \n${err}`);
 process.exit(1); // Exit the application with an error code
 });
}
module.exports=connectDB;
//  app.listen(PORT, () => {
//  console.log(`Server started on port ${PORT}`);
// });