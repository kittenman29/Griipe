const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const configureRoutes = require('../config/routes');

// const twitterRoutes = require('../config/twitter/twitter-router');
const formRoutes = require("../config/confirmation/form-router")

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.send(`
        <h1>Api Portal</h1>
    `)
})

configureRoutes(server);
server.use('/api/routes', formRoutes)
// server.use('/api/routes', twitterRoutes)

module.exports = server;
