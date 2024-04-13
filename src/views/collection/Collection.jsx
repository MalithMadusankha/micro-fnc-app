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
import NEXT_COLLECTIONS, { COLLECTIONS } from "../../assets/data.js";
import CollectionTable from "./componet/CollectionTable.js";
import NotificationComponet from "../../componets/NotificationComponet.js";
import UserProfileComponet from "../../componets/UserProfileComponet.js";
import { useNavigate } from "react-router-dom";
import SearchBarAction from "../../componets/SearchBarAction.js";
import NotificationDetailsComponet from "../../componets/NotificationDetailsComponet.js";
import NewCollectionModal from "./componet/NewCollectionModal.js";

export default function Collection() {
  const navigate = useNavigate();

  const [data, setData] = useState(NEXT_COLLECTIONS);
  const [collection, setCollection] = useState(COLLECTIONS);
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
    setCollection(COLLECTIONS);
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
                      <Col md={5} lg={7}>
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
                            value="id"
                            checked={searchOption === "id"}
                            onClick={() => setSearchOption("id")}
                            type="radio"
                            name="searchType"
                          />{" "}
                          Collection ID
                        </FormGroup>
                      </Col>

                      <Col>
                        <Button
                          onClick={() => {
                            setData(NEXT_COLLECTIONS);
                            setCollection(COLLECTIONS);
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
              <h5> Collection List </h5>
            </Col>
            <Col>
              <h5 className="text-right text-danger pr-1">
                <NewCollectionModal />
                {data && data.length > 0
                  ? "Total Amount To Collected : " + 4800
                  : ""}
              </h5>
            </Col>
          </Row>
          {collection && collection.length > 0 ? (
            <Row className="m-3 mb-4">
              <Col>
                <Card className="shadow">
                  <CardBody className="pb-0">
                    <CollectionTable data={collection} />
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
