import React from "react";
import { Card, Col, Row, CardBody } from "reactstrap";

export default function ItemSummaryComponet() {
  return (
    <div>
      <Row>
        <Col lg={3}>
          <Row className="mt-1 me-1">
            <Card className="shadow">
              <CardBody className="">
                <Row>
                  <h5 className="text-center"> 30000 </h5>
                  <h6 className="text-primary text-center">
                    Total Lends Amount
                  </h6>
                </Row>
              </CardBody>
            </Card>
          </Row>
          <Row className="mt-1 me-1">
            <Card className="shadow">
              <CardBody className="">
                <Row>
                  <h5 className="text-center"> 29700 </h5>
                  <h6 className="text-primary text-center">Blance</h6>
                </Row>
              </CardBody>
            </Card>
          </Row>
        </Col>
        <Col lg={3}>
          <Row className="mt-1 me-1">
            <Card className="shadow">
              <CardBody className="">
                <Row>
                  <h5 className="text-center"> 6300 </h5>
                  <h6 className="text-primary text-center">
                    Total Recovered Amount
                  </h6>
                </Row>
              </CardBody>
            </Card>
          </Row>
          <Row className="mt-1 me-1">
            <Card className="shadow">
              <CardBody className="">
                <Row>
                  <h5 className="text-center"> 10% </h5>
                  <h6 className="text-primary text-center">Rate</h6>
                </Row>
              </CardBody>
            </Card>
          </Row>
        </Col>

        <Col lg={3}>
          <Row className="mt-1 me-1">
            <Card className="shadow">
              <CardBody className="">
                <Row>
                  <h5 className="text-center"> 2850</h5>
                  <h6 className="text-primary text-center">
                    Total Over Due Amount
                  </h6>
                </Row>
              </CardBody>
            </Card>
          </Row>
          <Row className="mt-1 me-1">
            <Card className="shadow">
              <CardBody className="">
                <Row>
                  <h5 className="text-center"> 2024-01-30</h5>
                  <h6 className="text-primary text-center">Lend Date</h6>
                </Row>
              </CardBody>
            </Card>
          </Row>
        </Col>

        <Col lg={3}>
          <Row className="mt-1 me-1 h-100">
            <Card className="shadow ">
              <CardBody className="d-flex justify-content-center align-items-center">
                <Row>
                  <h4 className="text-center"> 30000 + 6000 </h4>
                  <h3 className="text-center"> 36000 </h3>
                  <h6 className="text-success text-center">
                    Total Amount To Recover
                  </h6>
                </Row>
              </CardBody>
            </Card>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col lg={3}>
          <Row className="mt-1 me-1">
            <Card className="shadow">
              <CardBody className="">
                <Row>
                  <h5 className="text-center"> 2024-03-30</h5>
                  <h6 className="text-primary text-center">Expire Date</h6>
                </Row>
              </CardBody>
            </Card>
          </Row>
        </Col>

        <Col lg={3}>
          <Row className="mt-1 me-1">
            <Card className="shadow">
              <CardBody className="">
                <Row>
                  <h5 className="text-center"> 2024-02-30</h5>
                  <h6 className="text-primary text-center">Over Due Since</h6>
                </Row>
              </CardBody>
            </Card>
          </Row>
        </Col>

        <Col lg={3}>
          <Row className="mt-1 me-1">
            <Card className="shadow">
              <CardBody className="">
                <Row>
                  <h5 className="text-center"> 2024-02-30</h5>
                  <h6 className="text-primary text-center">Next Collection</h6>
                </Row>
              </CardBody>
            </Card>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
