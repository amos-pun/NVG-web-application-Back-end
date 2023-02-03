const express = require('express')
const { test } = require('../Controller/testController')
const router = express.Router()

router.get('/', test )

module.exports = router