const express = require('express')
const ToyShopModel = require('../models/ToyShopModel')
const router = express.Router()

router.get('/drop', (req, res) => {
  ToyShopModel.deleteMany({}, () => {
    console.log("Delete all data succeed !")
    res.redirect('/ToyShop')
  })
})

//URL: localhost:3000/ToyShop
router.get('/', (req, res) => {
  ToyShopModel.find((err, data) => {
    if (!err) {
      //res.send(data)
      //render ra trang index ở thư mục views/ToyShop
      res.render('ToyShop/index', { ToyShop: data })
    }
  })
})

router.get('/delete/:id', (req, res) => {
  ToyShopModel.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log("Delete toy succeed !");
      //var message = "Delete toy succeed !";
      //redirect về trang /ToyShop (URL không phải view)
      res.redirect("/ToyShop");
    }
  })
})

//render ra form ADD
router.get('/add', (req, res) => {
  res.render("ToyShop/new");
})

//nhận & xử lý dữ liệu từ form ADD
router.post('/add', (req, res) => {
  ToyShopModel.create(req.body, (err) => {
    if (!err) {
      console.log('Add student succeed !')
      res.redirect("/ToyShop")
    }
  })
})

//render ra form EDIT
router.get('/edit/:id', (req, res) => {
  ToyShopModel.findById(req.params.id, (err, data) => {
    if (!err) {
      //render ra file: update.hbs (trong thư mục views/student)
      //gửi kèm dữ liệu của object toy để load vào form edit
      //student (tên) , data (dữ liệu)
      res.render("ToyShop/update", { ToyShop: data })
    }
  })
})

//nhận & xử lý dữ liệu từ form EDIT
router.post('/edit/:id', (req, res) => {
  var id = req.params.id;
  var ToyShop = req.body;
  ToyShopModel.findByIdAndUpdate(id, ToyShop, (err) => {
    if (!err) {
      console.log("Update toy succeed !")
      res.redirect("/ToyShop")
    }
  })
})

router.get('/detail/:id', (req, res) => {
  ToyShopModel.findById(req.params.id, (err, ToyShop) => {
    if (!err) {
      res.render('ToyShop/detail', { ToyShop: ToyShop })  
    }
  })
})

//search function
router.post('/search', (req, res) => {
  ToyShopModel.find({ name: new RegExp(req.body.name, "i") }, (err, data) => {
    if (!err) {
      res.render('ToyShop/index', { ToyShop: data })
    }
  })
})

module.exports = router