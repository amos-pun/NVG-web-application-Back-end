const express = require('express')
const router = require('./Routes/TestRoute')
require('dotenv').config()
require('./Database/connection')


// --- --- Imp -- Route (Call from myRoute)
const CategoryRoute = require('./Routes/categoryRoute')
const HolderRoute = require('./Routes/holderRoute')

const app = express()
const port = process.env.PORT || 9999

// middleware
const bodyParser = require('body-parser')

// Middle-ware
app.use(bodyParser.json())

// -- -- IMP -- -- Use Route
app.use('/api', router )
app.use('/api', CategoryRoute )
app.use('/api', HolderRoute )



app.listen(port, () => {
    console.log(`server sucessfully at ${port}`)
})

