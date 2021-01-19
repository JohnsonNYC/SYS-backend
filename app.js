const express = require('express');
const db = require('./db/sequelize')
const app = express();
const PORT = process.env.PORT || 7000

const userRouter = require('./routes/users')

app.get('/', (req,res)=>{
  res.send('Hello World')
})

//Test Database 
db.authenticate()
  .then(() => console.log('Succesfully connected to Database'))
  .catch((e) => console.log(e))

// User Routes
app.use(userRouter)

app.listen(PORT, console.log(`Server listening on port:${PORT}`))

