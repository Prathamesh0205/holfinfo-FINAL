const express = require('express')

const router = express.Router()
const { getCrypt, getElements } = require('../controllers/crypt')
router.route('/crypt/fetch').get(getElements)
router.route('/:id').get(getCrypt)

module.exports = router
