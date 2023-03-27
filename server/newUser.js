const db = require("./service/initialization")

const data = [{
    username:"testuser1",
    password:"123",
    user_type:"admin",
    marked_notifications:["7MYWkrSfgqmfc9yha7d6"]
},{
    username:"testuser2",
    password:"123",
    user_type:"admin",
    marked_notifications:[]
},{
    username:"testuser3",
    password:"123",
    user_type:"customer",
    marked_notifications:[]
},{
    username:"testuser4",
    password:"123",
    user_type:"customer",
    marked_notifications:[]
},{
    username:"testuser5",
    password:"123",
    user_type:"developer",
    marked_notifications:[]
},{
    username:"testuser6",
    password:"123",
    user_type:"developer",
    marked_notifications:[]
},
]

data.forEach(async (element)=>{
    await db.collection("UserDataCollection").add(element);

})