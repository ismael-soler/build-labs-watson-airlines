const path = require('path');
const mongoose = require('mongoose');
const mongo = require('./sample.mongodb');

async function main() {


    //Get global variables from .env file
    require('dotenv').config({ path: path.resolve(__dirname, '.env') });

    // Connect to mongodb
    const { create_connection } = require('./sample.mongodb');
    create_connection()
    .then((db) => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.log(err);
        process.exit();
    });

}

main();