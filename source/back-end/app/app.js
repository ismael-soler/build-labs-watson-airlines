const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const mongo = require('./mongodbConnection');
// routers
const FlightRouter = require('./routes/flightRouter');
const AirportRouter = require('./routes/airportRouter');
const AirlineRouter = require('./routes/airlineRouter');

async function main() {

    //Get global variables from .env file
    require('dotenv').config({ path: path.resolve(__dirname, '.env') });

    // Connect to mongodb
    const { create_connection } = require('./mongodbConnection');
    create_connection()
    .then((db) => {
        startServer();
    }).catch(err => {
        console.log(err);
        process.exit();
    });
}


function startServer() {
    // settings
    const app = express();
    const port = process.env.PORT || 3000;

    // middleware
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // routes
    app.get('/', (req, res) => {
        res.json({"message": "Welcome to the API"});
    });
    app.use('/flight', FlightRouter);
    app.use('/airport', AirportRouter);
    app.use('/airline', AirlineRouter);

    app.listen(port, () => {
        console.log('Server started on port: ', port);
    });

};

main();