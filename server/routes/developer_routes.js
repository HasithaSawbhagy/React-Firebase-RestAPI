const express = require ("express");
const router = express.Router()

var get_notification = require('../notification_handlers/getNotification')

router.get('/set/notification' ,(req,res,next)=>{
    get_notification(req , res)
})

module.exports = router