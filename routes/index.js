const express = require('express')
const ToyShopModel = require('../models/ToyShopModel')
const router = express.Router()

// //set trang chủ (homepage)
// router.get('/', (req, res) => {
//   //render ra trang index ở trong thư mục views
//   res.render('index')
// })

//URL: localhost:3000/ToyShop
router.get('/', (req, res) => {
  ToyShopModel.find((err, data) => {
    if (!err) {
      res.render('index', { ToyShop: data })
    }
  })
})

module.exports = router