const express = require('express')
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use('/api/auth/login', require('./routes/authRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))