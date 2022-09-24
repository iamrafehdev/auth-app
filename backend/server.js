const express = require('express')
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
var cors = require('cors')

connectDB()

const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/auth/', require('./routes/authRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))