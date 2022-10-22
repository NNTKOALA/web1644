const mongoose = require('mongoose')

var LegoSchema = new mongoose.Schema(
    {
        name: String,
        image: String
    },
    {
        versionKey: false //optional (to remove _v: 0 when add new data)
    }
)

//Note: tham số cuối cùng bắt buộc phải là tên của collection (table) trong DB
var LegoModel = mongoose.model('lego', LegoSchema, 'lego')
module.exports = LegoModel