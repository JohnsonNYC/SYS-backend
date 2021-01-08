const express = require('express')
const router = express.Router();
const User = require('../models/User')
const bodyParser = require('body-parser')

//Create Users
router.post('/users', bodyParser.json(),async(req,res)=>{
    const user = new User(req.body)
    try{
        await user.save()
        res.status(200).send(user)
    }catch(e){
        res.status(404).send(e)
    }
})
// Get Users 
router.get('/users', async(req,res)=>{
    const users = await User.findAll();
    res.send(users)
})

module.exports = router 