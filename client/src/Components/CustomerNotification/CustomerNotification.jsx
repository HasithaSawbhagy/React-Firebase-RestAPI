import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import baseUrl from "../../Apis/baseUrl";

const CustomerNotification = () => {
  // const [notificationData, setNotificationData] = useState([]);
  // const [notificationSize, setNotificationSize]= useState(0);
  //const [user_id, serUser_id] = useState("wzPWOYMQpdxuiP1OfsCH");

  const [dataLoaded, setDataLoaded] = useState(false);

  var notificationData = [];
  var user_id = "wzPWOYMQpdxuiP1OfsCH";
  var notification_list_size = 0;

  function getUserID() {
    return "QZS3ql8T9MD8ETj3IobD";
  }

  function getUnReadNotificationList() {
    console.log(user_id);
    baseUrl
      .get("/api/customer/get/marked/notification" + user_id)
      .then((res) => {
        notificationData = res.data;
        console.log(notificationData);
        // alert(res.data)
      })
      .catch((err) => {
        alert(err);
      });
  }

  //getSizeOfUnReadNotificationList()
  return (
    <div className="notification-container">
      <Button
        onClick={() => {
          dataLoaded ? setDataLoaded(false) : setDataLoaded(true);
          if (!dataLoaded) {
            getUnReadNotificationList();
            console.log("Data loaded");
          }
        }}
      >
        <div className="btn-text">Notification</div>
        {!dataLoaded ? (
          <div className="notification-counter">{notificationData}</div>
        ) : (
          ""
        )}
      </Button>
    </div>
  );
};

export default CustomerNotification;
