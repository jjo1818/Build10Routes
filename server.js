// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080 

const classes = require('./models/classes')

const { createEngine } = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())

const classRoutes = require('./routes/classRoutes')

// Connect our routes to our express app
app.use('/classes', classRoutes)

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})