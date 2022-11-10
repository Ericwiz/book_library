const express = require('express')

const router = express.Router()

// GET users listing
router.get('/', (req, res, next) => {
    res.send("Respond with all users")
})

module.exports = router