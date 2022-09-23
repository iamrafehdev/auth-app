const express = require('express')
const router = express.Router()
const { loginUser, registerUser, getUserInfo } = require('../controllers/authController')

router.get('/register', registerUser)
router.get('/login', loginUser)
router.get('/me', getUserInfo)

module.exports = router