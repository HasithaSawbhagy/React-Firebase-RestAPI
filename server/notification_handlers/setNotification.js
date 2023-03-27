const db = require("../service/initialization");

module.exports = async function pushNotification(req, res) {
  const data = req.body;
  await db.collection("subadmin").add(data);
  res.send({msg: "User addded successfully"});

 // res.send("notification push successful.");
};
