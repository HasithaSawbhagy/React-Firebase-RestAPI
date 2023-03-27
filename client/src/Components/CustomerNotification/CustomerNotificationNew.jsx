import React, { useEffect, useState } from "react";
import baseUrl from "../../Apis/baseUrl";

const CustomerNotificationNew = () => {

  const [dataLoaded, setDataLoaded] = useState([]);
  const user_id = "wzPWOYMQpdxuiP1OfsCH";
  const getUnReadNotificationList = () => {
    console.log(user_id);
    baseUrl
      .get("/api/customer/get/marked/notification" + user_id)
      .then((res) => {
        const notificationData = res.data;
        const data = notificationData;
        console.log(data);
        setDataLoaded(data);
        //alert(res.data)
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getUnReadNotificationList();
  }, []);

  return (
    <div className="notification-container">
      <table className="DataTable">
        <thead>
          <tr>
            <th>C_Broadcast</th>
            <th>description</th>
            <th>D_Broadcast</th>
            <th>ID</th>
            <th>pushed_date</th>
            <th>pushed_time</th>
            <th>Reviewed</th>
            <th>Target</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {dataLoaded.map((item) => 
            <tr key={item.id}>
              <td>{item.customer_broadcast}</td>
              <td>{item.description}</td>
              <td>{item.developer_broadcast}</td>
              <td>{item.id}</td>
              <td>{item.pushed_date}</td>
              <td>{item.pushed_time}</td>
              <td>{item.reviewed_by_user}</td>
              <td>{item.target_users}</td>
              <td>{item.title}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerNotificationNew;
