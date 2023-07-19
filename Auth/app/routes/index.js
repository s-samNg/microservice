const express = require('express')
const router = express.Router();
const userRoutes = require('./user.js')

router.use("/", userRoutes)

module.exports = router