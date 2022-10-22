const express = require('express')
const LegoModel = require('../models/LegoModel')
const router = express.Router()

router.get('/', (req, res) => {
    LegoModel.find((err, data) => {
      if (!err) {
        res.render('Lego/index', { lego: data })
      }
    })
  })

module.exports = router