// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8084

const classes = require('./models/classes')

const { createEngine } = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())

const classRoutes = require('./routes/classRoutes')

// Connect our routes to our express app
app.use('/classes', classRoutes)

// setup and index route for data
app.get('/data',(req, res) => {
  res.send(mydata)
})

// setup a "show" route data
app.get('/data/:index', (req, res) => {
    res.send(mydata)
})

app.get('/subject', (req, res) => {
    res.send('Math')
})

app.get('/spanish', (req, res) => {
    res.send('1st period')
})

app.get('/gym', (req, res) => {
    res.send('2nd Period PE')
})

app.get('/math', (req, res) => {
    res.send('3rd Period')
})

app.get('/science', (req, res) => {
    res.send('4th Period')
})

app.get('/earthscience', (req, res) => {
    res.send('5th Period')
})

app.get('/history', (req, res) => {
    res.send('6th Period')
})

app.get('/french', (req, res) => {
    res.send('7th Period')
})

app.get('/mandaran', (req, res) => {
    res.send('8th Period')
})

app.get('/socialstudies', (req, res) => {
    res.send('9th Period')
})

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})