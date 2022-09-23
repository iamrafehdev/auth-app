const express = require('express')
const router = express.Router()
const { login } = require('../controllers/authController')

router.get('/', login)

module.exports = router