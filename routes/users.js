const express = require('express')
const router = express.Router();
const User = require('../models/User')
const bodyParser = require('body-parser')

// Create Users
router.post('/users', bodyParser.json(),async(req,res)=>{
 const user = new User(req.body)
 try{
  await user.save()
  res.status(200).send(user)
 }catch(e){
  res.status(404).send(e)
 }
})
// Read Users 
router.get('/users', async(req,res)=>{
 const users = await User.findAll();
 res.send(users)
})

// Update Users

// Delete Users
router.delete('/users/:id', bodyParser.json(),async(req,res) => {
  await User.destroy({
    where: {
    id: req.params.id 
    }
  }).then(() => res.send('User Deleted')).catch(e => console.log(e))

})

module.exports = router 