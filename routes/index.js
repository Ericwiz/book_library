const express = require('express')

const router = express.Router()

// GET users listing
router.get('/', (req, res, next) => {
    res.render("index", {title: "Hello Express", word: "Express"})
})

module.exports = router