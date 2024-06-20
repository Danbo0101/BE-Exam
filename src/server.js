const express = require('express');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const connection = require('./config/database');

const fileUpload = require('express-fileupload');


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
        // test connection
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }

})()



