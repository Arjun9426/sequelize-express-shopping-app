const  route=require('express').Router()

const user=require('../../db').user

route.get('/',(req,res)=>{
    // will send all info in array form about user
    user.findAll()
    .then((users)=>{
        res.status(200).send(users)
    })
    .catch(()=>{
        res.status(500).send({
            error: " could not retrieve users"
        })
    })
})

route.post('/',(req,res)=>{
    user.create({
        name : req.body.name
    }) 
    .then((user)=>{
        res.status(201).send(user)
    }) 
    .catch((err)=>{
        res.status(501).send({
            error: "can't add user! "
        })
    })
})

module.exports={route}