const express = require('express')
const router = express.Router()
const {handleEmpData , handleDeleteEmp , handleEditEmp ,handleGetData} = require('../controllers/index')

router.post('/' , handleEmpData)
router.delete('/:id' , handleDeleteEmp)
router.patch('/:id' , handleEditEmp)
router.get('/' , handleGetData)

module.exports = router 