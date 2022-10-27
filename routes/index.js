const express = require('express')
const ToyShopModel = require('../models/ToyShopModel')
const router = express.Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/homepage', (req, res) => {
  ToyShopModel.find((err, data) => {
    if (!err) {
      res.render('homepage', { ToyShop: data })
    }
  })
})

module.exports = router;
