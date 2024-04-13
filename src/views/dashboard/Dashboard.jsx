import React, { useState } from "react";
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
import { FaSearch } from "react-icons/fa";
import NEXT_COLLECTIONS, { INCOME } from "../../assets/data.js";
import NotificationComponet from "../../componets/NotificationComponet.js";
import UserProfileComponet from "../../componets/UserProfileComponet.js";
import { useNavigate } from "react-router-dom";
import SearchBarAction from "../../componets/SearchBarAction.js";
import NotificationDetailsComponet from "../../componets/NotificationDetailsComponet.js";
import TotalSummaryComponet from "./componet/TotalSummaryComponet.js";

export default function Dashboard() {
  const navigate = useNavigate();

  const [data, setData] = useState(NEXT_COLLECTIONS);
  const [collection, setCollection] = useState(INCOME);
  const [isClickNotification, setIsClickNotification] = useState(false);
  const [isClickNotifItem, setIsClickNotifItem] = useState(false);
  const [isClickProfile, setIsClickProfile] = useState(false);
  const [searchOption, setSearchOption] = useState("id");
  const [searchTxt, setSearchTxt] = useState("");

  const notificationViewHandler = (notifNic) => {
    setIsClickNotifItem(false);
    setIsClickNotification(false);
    navigate(`/home/${notifNic}`);
    searchHandler();
  };

  const searchHandler = () => {
    setData(NEXT_COLLECTIONS);
    setCollection(INCOME);
  };

  return (
    <>
      <div className="content-fluid mt-3 position-relative">
        {/* Search Bar */}
        <Row>
          <Col>
            <Card lg={12} className="shadow">
              <CardBody>
                <Row>
                  <Form
                    className="mx-auto"
                    // style={{ width: windowSize.width * 0.7 }}
                  >
                    <Row className="row-cols-lg-auto g-3 align-items-center">
                      <Col md={8} lg={10}>
                        <h4 className="text-primary"> Dashboard</h4>
                      </Col>

                      <SearchBarAction
                        setIsClickProfile={setIsClickProfile}
                        setIsClickNotification={setIsClickNotification}
                        setIsClickNotifItem={setIsClickNotifItem}
                        isClickProfile={isClickProfile}
                        isClickNotification={isClickNotification}
                      />
                    </Row>
                  </Form>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <TotalSummaryComponet />
        </Row>

        <div
          className={`position-absolute w-40 top-23 right-6 ${
            isClickNotification ? "" : "display-n"
          }`}
        >
          <NotificationComponet
            setIsClickNotifItem={setIsClickNotifItem}
            isClickNotifItem={isClickNotifItem}
            notification={data}
          />
        </div>
        <div
          className={`position-absolute w-50 top-23 right-10 ${
            isClickProfile ? "" : "display-n"
          }`}
        >
          <UserProfileComponet />
        </div>
        <div
          className={`position-absolute w-50 h-25 top-23 right-40 ${
            isClickNotification && isClickNotifItem ? "" : "display-n"
          }`}
        >
          <NotificationDetailsComponet
            notificationViewHandler={notificationViewHandler}
          />
        </div>
      </div>
    </>
  );
}
