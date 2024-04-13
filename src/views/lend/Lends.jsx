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
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import NEXT_COLLECTIONS, { LEANDING_COLLECTION } from "../../assets/data.js";
import LendingTable from "./componet/LendingTable.js";
import NotificationComponet from "../../componets/NotificationComponet.js";
import UserProfileComponet from "../../componets/UserProfileComponet.js";
import { Link, useNavigate } from "react-router-dom";
import SearchBarAction from "../../componets/SearchBarAction.js";
import NotificationDetailsComponet from "../../componets/NotificationDetailsComponet.js";

export default function Lends() {
  const navigate = useNavigate();

  const [data, setData] = useState(NEXT_COLLECTIONS);
  const [lending, setLending] = useState(LEANDING_COLLECTION);
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
    setLending(LEANDING_COLLECTION);
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
                      <Col md={4} lg={6}>
                        <Label className="visually-hidden" for="search">
                          Search
                        </Label>
                        <Input
                          id="search"
                          name="search"
                          placeholder="search"
                          type="search"
                          value={searchTxt}
                          onChange={(e) => setSearchTxt(e.target.value)}
                        />
                      </Col>
                      <Col>
                        <FormGroup check>
                          <Input
                            value="nic"
                            checked={searchOption === "nic"}
                            onClick={() => setSearchOption("nic")}
                            type="radio"
                            name="searchType"
                          />{" "}
                          NIC
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup check>
                          <Input
                            value="jobId"
                            checked={searchOption === "jobId"}
                            onClick={() => setSearchOption("jobId")}
                            type="radio"
                            name="searchType"
                          />{" "}
                          Job ID
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup check>
                          <Input
                            value="lendId"
                            checked={searchOption === "lendId"}
                            onClick={() => setSearchOption("lendId")}
                            type="radio"
                            name="searchType"
                          />{" "}
                          Lend ID
                        </FormGroup>
                      </Col>
                      <Col>
                        <Button
                          onClick={() => {
                            setData(NEXT_COLLECTIONS);
                            setLending(LEANDING_COLLECTION);
                          }}
                          color="info"
                          className="text-white"
                        >
                          <FaSearch /> Search
                        </Button>
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
        <div>
          {/* Leanding */}
          <Row className="mt-4">
            <Col>
              <h5> Lending List </h5>
            </Col>
            <Col>
              <h5 className="text-right text-danger pr-1">
                <Link className="btn btn-primary btn-sm me-4" to={"/lend/new"}>
                  New Lend
                </Link>
                {data && data.length > 0 ? "Total Lending : " + 15050 : ""}
              </h5>
            </Col>
          </Row>
          {lending && lending.length > 0 ? (
            <Row className="m-3 mb-4">
              <Col>
                <Card className="shadow">
                  <CardBody className="pb-0">
                    <LendingTable data={lending} />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          ) : (
            ""
          )}
        </div>
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
