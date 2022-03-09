
const express = require('express')
const router = express.Router()

const controller = require('./controller')


router.get('/', controller.getAll)
router.post('/', controller.createNewTask)
router.put('/:id', controller.updateTask)
router.delete('/:id', controller.deleteTask)



module.exports = router