import React, { useState } from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  Button,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import UserImage from "../assets/img/user.jpg";
import NewAppoinmentModal from "./NewAppoinmentModal";

export default function NotificationDetailsComponet({
  notificationViewHandler,
}) {
  const [isNewAppoinment, setIsNewAppoinment] = useState(false);
  return (
    <>
      <Card className="shadow border-1 border-primary">
        <CardBody>
          <Row>
            <Col lg={8} className="my-auto mx-auto">
              <Row className="mt-1">
                <Col lg={4}>
                  <h6> Name :</h6>
                </Col>
                <Col>
                  <h6> Malith Madusankha</h6>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col lg={4}>
                  <h6> Address :</h6>
                </Col>
                <Col>
                  <h6> No 102, Kandy Road , Kadwatha</h6>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col lg={4}>
                  <h6> Mobile :</h6>
                </Col>
                <Col>
                  <h6> 0712231234</h6>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col lg={4}>
                  <h6> Home :</h6>
                </Col>
                <Col>
                  <h6> 0112551234</h6>
                </Col>
              </Row>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <div>
                <img
                  src={UserImage}
                  alt="user"
                  className="w-100 border rounded "
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <h5 className="text-primary mt-1"> Appoinment </h5>
            </Col>
          </Row>

          <Row>
            <Col lg={8} className="mt-2">
              <Row className="mt-1">
                <Col lg={4}>
                  <h6> Date :</h6>
                </Col>
                <Col>
                  <h6> 2024-05-05</h6>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col lg={4}>
                  <h6> Time :</h6>
                </Col>
                <Col>
                  <h6> 7.25 PM</h6>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col lg={4}>
                  <h6> Notice :</h6>
                </Col>
                <Col>
                  <h6> Will settle 580/= at evening</h6>
                </Col>
              </Row>

              <Row className="position-absolute bottom-0 w-100">
                <Col>
                  <Button
                    onClick={() => notificationViewHandler("95864685v")}
                    color="info"
                    size="sm"
                    className="w-100 text-white"
                  >
                    View
                  </Button>
                </Col>

                <Col>
                  <NewAppoinmentModal />
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="mt-2">
                <Col>
                  <Card className="bg-primary text-white text-center">
                    <CardBody>
                      <h6>25000</h6>
                      <p className="m-0"> To Be Collected</p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <Card className="bg-primary text-white text-center">
                    <CardBody>
                      <p className="m-0"> Multiple Lends</p>
                      <h6>4</h6>
                      <p className="m-0"> Over Due</p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
          {/* New Appoinment */}
        </CardBody>
      </Card>
    </>
  );
}
