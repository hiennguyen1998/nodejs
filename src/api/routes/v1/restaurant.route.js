const restaurantCtrl = require('./../../controllers/restaurant.controller')
const express = require('express')
const router = express.Router()

router.post('/readFile',restaurantCtrl.saveDataSet)

module.exports = router