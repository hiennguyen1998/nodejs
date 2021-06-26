const Restaurant = require('./../models/restaurantModel')
const fs = require('fs')
const {omit} = require('lodash')
//const reject = require('lodash.reject')
const { resolveSoa } = require('dns')
const { Collection } = require('mongoose')

const readFileSync = (path)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(path,(err,data)=>{
            if(err) reject(err.message)
            resolve(data)
        })
    })
}

exports.saveDataSet = async (req,res,next)=>{
    try {
        let restaurantArray=[]
        const namePath = `${__dirname}/../../data/${req.body.file}`
        const data = JSON.parse(await readFileSync(namePath))
        console.log(data.length)
        data.forEach(element => {
            let restaurant 
            restaurant= omit(element,'_id')
            restaurantArray.push(restaurant)
        });
        if(restaurantArray.length != 0) console.log("Done")
        await Restaurant.create(restaurantArray)
        console.log("Done 1")
        res.status(201).json({
            message:"Success",
            length: restaurantArray.length
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message:"Failed",
            error:error.message
        })
    }
}