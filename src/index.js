const express = require('express');
const {PORT} = require("../src/config/serverConfig");
const bodyParser = require('body-parser');
const app = express();

const apiRoutes = require('./routes/index');


const setUpAndStartServer = async() => {

    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',apiRoutes);


    app.listen(PORT, async() => {
        console.log(`Server is started and running at ${PORT}`)
        
    })
}

setUpAndStartServer()
