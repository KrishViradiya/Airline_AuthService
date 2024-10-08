const express = require('express');
const bcrypt = require('bcrypt')
require('dotenv').config();


module.exports = {
    PORT:process.env.PORT,
    SALT:bcrypt.genSaltSync(10),
    JWT_KEY:process.env.JWT_KEY
}