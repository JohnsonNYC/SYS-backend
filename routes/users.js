const express = require('express')
const router = express.Router();
const User = require('../models/User')
const bodyParser = require('body-parser')

// Create Users √
router.post('/users', bodyParser.json(),async(req,res)=>{
  const user = new User(req.body)
  try{
    await user.save()
    res.status(201).send(user)
  }catch(e){
    res.status(400).send(e)
  }
})
// Read Users √
router.get('/users', async(req,res)=>{
  try{
    const users = await User.findAll();
    res.status(200).send(users)
  }catch(e){
    res.status(404).send(e)
  }
})

// Update Users 

// Delete Users
router.delete('/users/:id', bodyParser.json(),async(req,res) => {
  try{
    await User.destroy({
      where:{
        id: req.params.id
      }
    })
    res.send('User Deleted')
  }catch(e){
    res.status(500).send(e)
  }
})

module.exports = router 