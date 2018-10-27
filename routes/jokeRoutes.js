const express = require('express')
const router = express.Router()
const controller = require('../controllers/jokeControllers')

router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.post('/', controller.postJoke)
router.put('/:id', controller.putJoke)
router.get('/:id', controller.deleteJoke)

module.exports = router