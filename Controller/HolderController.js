const { trusted } = require('mongoose')
const Holder = require('../Model/holderModel')

// to create a New Stake Holders
exports.addHolder = async ( req , res ) => {
    let holder = await Holder.findOne({holdersName: req.body.holdersName})
    if(!holder){
        let holderToAdd = new Holder({
            holdersName: req.body.holdersName
        })
        holderToAdd = await holderToAdd.save()
        if(!holderToAdd){
            return res.status(400).json({error:"Holder Name is required"})
        }
        return res.send(holderToAdd)
    }
    res.status(400).json({error:"Holder already exists."})
}

// to get all share holders name
exports.getAllHolders = async ( req, res ) => {
    let holders = await Holder.find()
    if(!holders){
        return res.status(400).json({error:"Something is wrong"})
    }
    res.send(holders)
}

// to get share holders details
exports.holdersDetail = async ( req, res ) => {
    let holders = await Holder.findById(req.params.id)
    if(!holders){
        return res.status(400).json({error:"something went wrong."})
    }
    res.send(holders)
}

// to update share holders
exports.updateHolders = async ( req, res ) => {
    let holders = await Holder.findByIdAndUpdate(req.params.id,{
        holdersName: req.body.holdersName
    }, {new:true})
    if(!holders){
        return res.status(400).json({error:"something is wrong"})
    }
    res.send(holders)
}

// to delete share holders
exports.deleteshareholder = async ( req, res ) => {
    try{
        let shareholders = await Holder.findByIdAndDelete(req.params.id)
        if(!shareholders){
            return res.status(400).json({error:"Holder is not registered"})
        }
        res.status(200).json({msg:"Share Holder has been deleted"})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}