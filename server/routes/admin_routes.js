const express = require ("express");
const router = express.Router()

var push_notification = require('../notification_handlers/setNotification')
var get_notification = require('../notification_handlers/getNotification')

router.post('/add/notification' ,(req,res,next)=>{
    push_notification(req , res)
})

router.get('/get/notification' ,(req,res,next)=>{
    get_notification(req , res)
})

module.exports = router