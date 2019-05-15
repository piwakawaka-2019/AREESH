const path = require('path')
const express = require('express')
const cors = require('cors')
const passport = require('passport')
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth')
const usersRoutes = require('./routes/users')
const speechRoutes = require('./routes/speech')
const gameRoutes = require('./routes/game')
// const meetingsRoutes = require('./routes/meetings')

const server = express()

server.use(bodyParser.json({limit: '50mb'}));
server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

server.use(cors('*'))
server.use(passport.initialize())

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/auth', authRoutes)
server.use('/api/users', usersRoutes)
server.use('/api/speech', speechRoutes)
server.use('/api/game', gameRoutes)

module.exports = server