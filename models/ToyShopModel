const mongoose = require('mongoose')

var ToyShopSchema = new mongoose.Schema(
    {
        name: String,
        type: String,
        code: String,
        price: Number,
        image: String
    },
    {
        versionKey: false //optional (to remove _v: 0 when add new data)
    }
)

//Note: tham số cuối cùng bắt buộc phải là tên của collection (table) trong DB
var ToyShopModel = mongoose.model('Toy', ToyShopSchema, 'ToyShop')
module.exports = ToyShopModel