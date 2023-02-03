const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 9999

app.get('/',(req, res) => {
    res.send("You are welcomed to this page")
})

app.get('/home',(req,res) => {
    res.send('Home is home')
})

app.listen(port, () => {
    console.log(`server sucessfully at ${port}`)
})