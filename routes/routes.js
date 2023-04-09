const express=require('express')
const Router=express.Router()
const {getAllElement,getAllElementTesting}=require('../controllers/control')
Router.route('/').get(getAllElement)
Router.route('/testing').get(getAllElementTesting)
module.exports=Router