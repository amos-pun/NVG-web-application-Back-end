const mongoose = require('mongoose')

const holderSchema = new mongoose.Schema ({
    holdersName: {
        type: String,
        required: true,
        trim: true
    }
},{timestamps:true})

module.exports = mongoose.model("Holder", holderSchema)