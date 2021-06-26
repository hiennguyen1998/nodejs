const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    address:{
        building: {type:String},
        coord:[Number],
        street:{type:String},
        zipcode:{type:String}
    },
    borough:{type: String},
    cuisine:{type:String},
    grades:[
        {
            date: {
                date:Date
            },
            grade:String,
            score:Number
        }
    ],
    name:{type:String},
    restaurant_id:{type:String}
})

const restaurant = mongoose.model('restaurant',restaurantSchema)

module.exports = restaurant