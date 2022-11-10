const express = require('express')
const createError = require('http-errors')
const logger = require('morgan')
const path = require('path')
const cookieParser = require('cookie-parser')
const indexRoute = require('./routes/index')
const userRoute = require('./routes/user')
require('dotenv').config()

const app = express()

// view engine setup
app.set('view engine', 'ejs')
// set up middlewares
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.use(express.static('public'))

// ROUTES MIDDLEWARE
app.use('/', indexRoute)
app.use('/users', userRoute)

// catch 404 and forward to error handdler
app.use((req, res, next) => {
    next(createError(404))
})

// error handdler
app.use((err, req, res, next) => {
    // set errors local, only providing errors in development
    res.locals.message = err.message
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500).render("error")
})

// setup host/server
const port = process.env.PORT || 3000


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})