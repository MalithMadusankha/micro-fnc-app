import React from "react";
import { Card, Col, Row, CardBody, Badge, Button } from "reactstrap";
import UserLendImage from "../../../assets/img/user-lend.jpg";

export default function TotalSummaryComponet({ data }) {
  return (
    <>
      <Row className="mt-4">
        <Col>
          <h5 className="text-primary"> Summary </h5>
        </Col>
        <Col></Col>
      </Row>
      <Row className="m-3">
        <Col lg={3}>
          <Card className="shadow ">
            <CardBody className="">
              <h6 className="text-center text-primary"> Other Income</h6>
              <h3 className="text-center text-danger mt-3"> 250000</h3>
            </CardBody>
          </Card>
        </Col>

        <Col lg={3}>
          <Card className="shadow ">
            <CardBody className="">
              <h6 className="text-center text-primary">
                {" "}
                Total Amount Collected
              </h6>
              <h3 className="text-center text-danger mt-3"> 35000</h3>
            </CardBody>
          </Card>
        </Col>

        <Col lg={3}>
          <Card className="shadow ">
            <CardBody className="">
              <h6 className="text-center text-primary"> Total Income</h6>
              <h3 className="text-center text-danger mt-3"> 285000</h3>
            </CardBody>
          </Card>
        </Col>

        <Col lg={3}>
          <Card className="shadow ">
            <CardBody className="">
              <h6 className="text-center text-primary"> Collection Sort</h6>
              <h3 className="text-center text-danger mt-3"> 500</h3>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
