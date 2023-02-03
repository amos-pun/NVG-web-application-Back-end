const express = require('express')
const { addCategory, getAllCategories, categoryDetails, updateCategory, deleteCategory } = require('../Controller/CategoryController')
const router = express.Router()


router.post('/addcategory', addCategory)
router.get('/getallcategories', getAllCategories)
router.get('/categorydetails/:id', categoryDetails)
router.put('/updatecategory/:id', updateCategory)
router.delete('/deletecategory/:id', deleteCategory)



module.exports = router 