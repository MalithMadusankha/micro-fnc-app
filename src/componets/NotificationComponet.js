import React from "react";
import { Card, Col, Row, CardBody } from "reactstrap";

export default function NotificationComponet({
  notifications,
  setIsClickNotifItem,
  isClickNotifItem,
}) {
  return (
    <>
      <Row>
        <Col>
          <Row className="mt-1">
            <Col>
              <Card
                className="shadow border-1 border-primary cursor-p"
                onClick={() => setIsClickNotifItem(true)}
              >
                <CardBody className="">
                  <Row>
                    <h6 className="text-primary ">Daily Collections 1500</h6>
                    <p> Job ID JOB0002 Mr.Pathmakumara - Motor Bike </p>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-1">
            <Col>
              <Card
                className="shadow border-1 border-primary cursor-p"
                onClick={() => setIsClickNotifItem(true)}
              >
                <CardBody className="">
                  <Row>
                    <h6 className="text-primary ">Daily Collections 300</h6>
                    <p> Job ID JOB0005 Mr.Nanayakkara - Mobile Phone </p>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-1">
            <Col>
              <Card
                className="shadow border-1 border-primary cursor-p"
                onClick={() => setIsClickNotifItem(true)}
              >
                <CardBody className="">
                  <Row>
                    <h6 className="text-primary ">Monthly Collections 5000</h6>
                    <p> Job ID JOB0002 Mr.Munashinghe - Land </p>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
