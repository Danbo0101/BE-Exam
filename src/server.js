const express = require('express');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const connection = require('./config/database');
const fileUpload = require('express-fileupload');

//using mongodriver
const { MongoClient } = require('mongodb');


const app = express();


//config fileUpload
app.use(fileUpload());

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 8888;
const hostname = process.env.hostname;

//config template engine
configViewEngine(app);

//route
app.use('/', webRoutes);
app.use('/v1/api/', apiRoutes);





(async () => {
    try {
        // test connection mongosse
        await connection();

        //using mongodriver

        // // Connection URL
        // const url = process.env.DB_HOST_WITH_DRIVER;
        // const client = new MongoClient(url);

        // // Database Name
        // const dbName = process.env.DB_DATABASE;

        // await client.connect();
        // console.log('Connected successfully to server');
        // const db = client.db(dbName);
        // const collection = db.collection('documents');


        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }

})()



