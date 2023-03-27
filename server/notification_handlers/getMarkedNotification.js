
const db = require("../service/initialization")

module.exports = async function get_Marked_Notification(req,res){
  const req_data = req.body;

      const available_Notification_Snapshot = await db.collection("NotificationCollection")
      .orderBy("pushed_date")     
      .get();
      const available_Notification_List = available_Notification_Snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()}));

      const marked_Notification_Snapshot = await db.collection("UserDataCollection")
      .orderBy("username")     
      .get();
      // const marked_Notification_List = marked_Notification_Snapshot.docs.map((doc)=>({       
      //   id: doc.id, ...doc.data()
      // }));


      var selected_user;
      marked_Notification_Snapshot.forEach((marked_doc)=>{
      //  console.log(marked_doc.id)
       // console.log(req.params.user_id+"\n")

        if(marked_doc.id ===req.params.user_id){
          selected_user = marked_doc.data();
          //console.log("selected_user")
        }
      })
      var unMarked_Notification_List = new Array();

      available_Notification_List.forEach((available_element)=>{
        //console.log(available_element)
       var availablity = false

       selected_user.marked_notifications.forEach((selected_element)=>{
        console.log(available_element.id, selected_element)
        if(available_element.id===selected_element){
          availablity=true
        }
       })
       if(!availablity){
        unMarked_Notification_List.push(available_element)
       }else{
        availablity=false
       }

      })

      // selected_user.marked_notifications.forEach((element)=>{
      //  // console.log(element)
      //  var availablity = false
      //   available_Notification_List.forEach((available_element)=>{
      //     console.log(element)
      //     console.log(available_element+"\n")
      //     if(available_element.id===element){
      //       //console.log("avao")
      //       availablity=true
            
      //     }
      //   })
      //   if(!availablity){
      //     unMarked_Notification_List.push(element)

      //   }else{
      //     availablity=false
      //   }

      // })
      res.send(unMarked_Notification_List)

    //console.log("req body is")

}