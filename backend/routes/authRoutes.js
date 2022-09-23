const express = require('express')
const router = express.Router()
const { loginUser, registerUser, getUserInfo } = require('../controllers/authController')
const { protect } = require('../middleware/authMiddleware')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getUserInfo)

module.exports = router