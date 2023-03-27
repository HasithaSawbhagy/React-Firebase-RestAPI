const express = require ("express");
const router = express.Router()

var get_notification = require('../notification_handlers/getNotification')
var get_Marked_Notification = require('../notification_handlers/getMarkedNotification')


router.get('/get/notification' ,(req,res,next)=>{
    get_notification(req , res)
})

router.get('/get/marked/notification:user_id' ,(req,res,next)=>{
    get_Marked_Notification(req , res)
})

module.exports = router