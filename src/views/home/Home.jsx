import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import NEXT_COLLECTIONS, { LEANDING_COLLECTION } from "../../assets/data.js";
import LendingTable from "./componet/LendingTable.js";
import SummaryComponet from "./componet/SummaryComponet.js";
import NextCollectionComponet from "./componet/NextCollectionComponet.js";
import NotificationComponet from "../../componets/NotificationComponet.js";
import UserProfileComponet from "../../componets/UserProfileComponet.js";
import SearchBarAction from "../../componets/SearchBarAction.js";
import NotificationDetailsComponet from "../../componets/NotificationDetailsComponet.js";
import ProfileViewModal from "./componet/ProfileViewModal.js";
import UserLendImage from "../../assets/img/user-lend.jpg";

export default function Home() {
  const { nic } = useParams();
  const [data, setData] = useState([]);
  const [lending, setLending] = useState([]);
  const [isClickNotification, setIsClickNotification] = useState(false);
  const [isClickNotifItem, setIsClickNotifItem] = useState(false);
  const [isClickProfile, setIsClickProfile] = useState(false);

  const [searchTxt, setSearchTxt] = useState("");
  const [searchOption, setSearchOption] = useState("");

  const notificationViewHandler = (notifNic) => {
    setIsClickNotifItem(false);
    setIsClickNotification(false);
    setSearchTxt(notifNic);
    setSearchOption("nic");
    if (notifNic) {
      searchHandler();
    }
  };

  const searchHandler = () => {
    setData(NEXT_COLLECTIONS);
    setLending(LEANDING_COLLECTION);
  };

  useEffect(() => {
    notificationViewHandler(nic === null ? "" : nic);
  }, []);

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
                        <Button
                          onClick={searchHandler}
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
        {data && data.length > 0 ? (
          <div>
            <Row className="mt-3">
              <Col lg={2}>
                <Card className="shadow h-100">
                  <CardBody>
                    <Row>
                      <img
                        src={UserLendImage}
                        alt="lend-user"
                        className="h-100"
                      />
                    </Row>
                    <Row>
                      <ProfileViewModal lending={lending[0]} />
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Row>
                  <Col className="h-100">
                    <Card className="shadow h-100">
                      <CardBody className="">
                        <Row>
                          <h5 className="pt-2 text-center"> 08</h5>
                          <h6 className="text-primary text-center">
                            Total Lends
                          </h6>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="h-100">
                    <Card className="shadow h-100">
                      <CardBody className="">
                        <Row>
                          <h5 className="pt-2 text-center"> 02 </h5>
                          <h6 className="text-primary text-center">
                            Closed Lends
                          </h6>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="h-100">
                    <Card className="shadow h-100">
                      <CardBody className="">
                        <Row>
                          <h5 className="pt-2 text-center"> 02 </h5>
                          <h6 className="text-primary text-center">
                            Recovered Lends
                          </h6>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col className="h-100">
                    <Card className="shadow h-100">
                      <CardBody className="">
                        <Row>
                          <h5 className="pt-2 text-center"> 02 </h5>
                          <h6 className="text-success text-center">
                            Open Lends{" "}
                          </h6>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="h-100">
                    <Card className="shadow h-100">
                      <CardBody className="">
                        <Row>
                          <h5 className="text-danger pt-2 text-center"> 02 </h5>
                          <h6 className="text-danger text-center">
                            Over Due Lends
                          </h6>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="h-100">
                    <Card className="shadow h-100">
                      <CardBody className="">
                        <Row>
                          <h5 className="text-danger pt-2 text-center"> 02 </h5>
                          <h6 className="text-danger text-center">
                            Over Due Days
                          </h6>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* Next Collection */}
            <NextCollectionComponet data={data} lending={lending} />
            {/* Summery  */}
            <SummaryComponet data={data} />
            {/* Leanding */}
            <Row className="mt-4">
              <Col>
                <h5 className="text-primary"> Lending History</h5>
              </Col>
              <Col>
                <h5 className="text-right text-danger pr-1">
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
        ) : null}

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
