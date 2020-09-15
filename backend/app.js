const express = require("express")
const mongoose = require('mongoose')
const bodyparser = require("body-parser")
const cors = require('cors')
require("dotenv/config")

const app = express()
const port = process.env.PORT || 13920


const exerroute = require('./routes/exer')
const userroute = require('./routes/user')

app.use(cors())
app.use(bodyparser.json())
app.use('/user', userroute)
app.use('/exer',exerroute)


const url = process.env.url

mongoose.connect(url,{useNewUrlParser : true, useUnifiedTopology: true} ,() => {
    console.log("connected to mongo")
})

app.get('/',(req,res) => {
    res.send("workin")
})

app.listen(port, () => {
    console.log(`server listenin on port : ${port}`)
})

