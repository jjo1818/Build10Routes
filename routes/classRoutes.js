const express = require('express')

// Creates our router
const router = express.Router()

// Load our controller and its route logic
const classController = require('../controllers/classController')

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

// Setup an "index" route for fruits, attach it to router along with the controller logic
router.get('/', classController.index)


// Setup an "show" route for class, attach it to router along with the controller logic
router.get('/:index', classController.show)


module.exports = router
