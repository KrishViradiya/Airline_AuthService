const express = require('express');
const {PORT} = require("../src/config/serverConfig");
const bodyParser = require('body-parser');
const app = express();

const apiRoutes = require('./routes/index');
// const db = require('./models/index');
// const {User , Role} = require('./models/index');


const setUpAndStartServer = async() => {

    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',apiRoutes);
    
    // const u1 = await User.findByPk(3);
    // const r1 = await Role.findByPk(1);
    // u1.addRole(r1);

    app.listen(PORT, async() => {
        console.log(`Server is started and running at ${PORT}`)
        
    })
}

setUpAndStartServer()
