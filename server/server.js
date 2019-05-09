const path = require('path')
const express = require('express')
const cors = require('cors')
const passport = require('passport')

const authRoutes = require('./routes/auth')
const usersRoutes = require('./routes/users')
const speechRoutes = require('./routes/speech')
// const meetingsRoutes = require('./routes/meetings')

const server = express()

server.use(cors('*'))
server.use(passport.initialize())

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/auth', authRoutes)
server.use('/api/users', usersRoutes)
server.use('/api/speech', speechRoutes)
// server.use('/api/meetings', meetingsRoutes)

module.exports = server
