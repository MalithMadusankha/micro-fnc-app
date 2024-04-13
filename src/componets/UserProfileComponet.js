import React from "react";
import { Col, Row, Card, CardBody } from "reactstrap";
import UserImage from "../assets/img/user.jpg";

export default function UserProfileComponet() {
  return (
    <>
      <Card className="shadow border-1 border-info">
        <CardBody>
          <Row>
            <Col lg={8} className="my-auto mx-auto">
              <Row className="mt-1">
                <Col lg={4}>
                  <h6> Name :</h6>
                </Col>
                <Col>
                  <h6> Priyantha Jayalath</h6>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col lg={4}>
                  <h6> Address :</h6>
                </Col>
                <Col>
                  <h6> No 102, Eksath Mawatha , Kadwatha</h6>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col lg={4}>
                  <h6> Mobile :</h6>
                </Col>
                <Col>
                  <h6> 0711231234</h6>
                </Col>
              </Row>
              <Row className="mt-1">
                <Col lg={4}>
                  <h6> Home :</h6>
                </Col>
                <Col>
                  <h6> 0112341234</h6>
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
        </CardBody>
      </Card>
    </>
  );
}
