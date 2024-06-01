require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get("/home",(req,res) => {
  res.send("this is the home page of avinash website")
})

app.get("/login",(req,res) =>{
  res.send("please login with your credentials")
})