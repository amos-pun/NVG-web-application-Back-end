const express = require('express')
const { deleteCategory } = require('../Controller/CategoryController')
const { addHolder, getAllHolders, holdersDetail, updateHolders, deleteshareholder } = require('../Controller/HolderController')
const upload = require('../utils/fileUpload')
const router = express.Router()


router.post('/addholder',upload.single('holder_image'), addHolder)
router.get('/getallholders', getAllHolders)
router.get('/holdersdetail/:id', holdersDetail)
router.put('/updateholders/:id', updateHolders)
router.delete('/deleteshareholder/:id', deleteshareholder)


module.exports = router