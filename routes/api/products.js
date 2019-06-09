const route =require('express').Router()

const product = require('../../db').product

route.get('/',(req,res)=>{
    product.findAll()
    .then((data)=>{
        res.status(200).send(data)
    })
    .catch((err)=>{
        res.status(500).send({
            error: "could not retrieve products! "
        })
    })
})


route.post('/',(req,res)=>{
    if(isNaN(req.body.price)){
        return res.status(403).send({
            error: "price is not a valid number!"
        })
    }
    product.create({
        name: req.body.name,
        manufacturer:req.body.manufacturer,
        price: parseFloat(req.body.price)
    })
    .then((data)=>{
        res.status(201).send(data)
    })
    .catch((err)=>{
        res.status(501).send({
            error: "could not add products ! "
        })
    })
})

module.exports={
    route
}