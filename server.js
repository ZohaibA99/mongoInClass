const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const { application } = require('express');

require('dotenv').config();
//process.env.PORT || process.env.DB_HOST

const app = express()

app.use(express.json());
//parses application/json

//cors
app.use(cors());

//create an instance for routerApi
const routerApi = require('./api');
app.use('/api', routerApi); //

//handle error if user/api tries to access the wrong path
app.use((req, res, __) => {
    res.status(404).json({
        status: 'error',
        code: 404,
        message: "Use Api path /api/tasks",
        data: 'not found'
    })
});

//handle error if the server is down/ has a problem.
app.use((req, res, __) => {
    res.status(505).json({
        status: 'error',
        code: 500,
        message: err.message,
        data: "Internal Server Error"
    })
});

const PORT = process.env.PORT;
const DB_HOST = process.env.DB_HOST;

const connection = mongoose.connect(DB_HOST);

connection
    .then(
        app.listen(PORT, function() {
            console.log(`server is running use your api on port ${PORT}`)
        })
    )
    .catch(err => console.log(`server not responding: ${err.message}`))