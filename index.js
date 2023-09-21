require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/db');
const  insertpostdata =require('./server/routes/main');
const app = express();

const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();
//inserting data into DB
//app.use('/',insertpostdata);

// Middleware
app.use(express.static('public'));
app.use(expressLayouts);
app.set('view engine', 'ejs');



app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});