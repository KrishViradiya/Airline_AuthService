const express = require('express');
const {PORT} = require("../src/config/serverConfig");
const bodyParser = require('body-parser');
const app = express();

const setUpAndStartServer = async() => {

    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(PORT, () => {
        console.log(`Server is started and running at ${PORT}`)
    })
}

setUpAndStartServer()
