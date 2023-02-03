const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE, () => {
    console.log("Database has been connected successfully.")
})