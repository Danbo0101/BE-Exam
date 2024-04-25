const express = require('express');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');
const connection = require('./config/database');




const app = express();

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 8888;
const hostname = process.env.hostname;

//config template engine
configViewEngine(app);

//route
app.use('/', webRouter);





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



