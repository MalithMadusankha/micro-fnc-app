import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  Card,
  Form,
  FormGroup,
  Input,
  Col,
  Label,
  Button,
  Row,
  CardBody,
} from "reactstrap";

export default function SearchBarAction({
  setIsClickNotification,
  setIsClickProfile,
  setIsClickNotifItem,
  isClickProfile,
  isClickNotification,
}) {
  return (
    <>
      <Col className="ms-4">
        <FaRegUserCircle
          onClick={() => {
            setIsClickNotification(false);
            setIsClickNotifItem(false);
            setIsClickProfile(!isClickProfile);
          }}
          className="cursor-p"
          color="blue"
          size={30}
        />
      </Col>
      <Col className="text-danger">
        <IoIosNotificationsOutline
          onClick={() => {
            setIsClickProfile(false);
            setIsClickNotifItem(false);
            setIsClickNotification(!isClickNotification);
          }}
          color="red"
          size={35}
          className="cursor-p"
        />
        3
      </Col>
    </>
  );
}
