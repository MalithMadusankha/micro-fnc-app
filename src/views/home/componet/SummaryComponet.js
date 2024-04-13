import React from "react";
import { Card, Col, Row, CardBody } from "reactstrap";

export default function SummaryComponet({ data }) {
  return (
    <>
      <Row className="mt-5">
        <Col>
          <h5 className="text-primary"> Summery</h5>
        </Col>
      </Row>

      {data && data.length > 0 ? (
        <Row className="m-3">
          {/* counts */}
          <Row>
            <Col className="h-100">
              <Card className="shadow h-100">
                <CardBody className="">
                  <Row>
                    <h5 className="pt-2 text-center"> 08</h5>
                    <h6 className="text-primary text-center">Total Lends </h6>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col className="h-100">
              <Card className="shadow h-100">
                <CardBody className="">
                  <Row>
                    <h5 className="pt-2 text-center"> 02 </h5>
                    <h6 className="text-primary text-center">Closed Lends</h6>
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
            <Col className="h-100">
              <Card className="shadow h-100">
                <CardBody className="">
                  <Row>
                    <h5 className="pt-2 text-center"> 02 </h5>
                    <h6 className="text-success text-center">Open Lends </h6>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col className="h-100">
              <Card className="shadow h-100">
                <CardBody className="">
                  <Row>
                    <Row className="d-flex justify-content-center align-items-center ">
                      <p className="text-danger text-center f-14">
                        12 Overdue Days
                      </p>
                    </Row>

                    <Row>
                      <h5 className="pt-1 text-center"> 02 </h5>
                    </Row>
                    <Row className="d-flex justify-content-center align-items-center">
                      <h6 className="text-danger text-center ">
                        Overdue Lends
                      </h6>
                    </Row>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* amounts */}
          <Row className="mt-3">
            <Col className="h-100">
              <Card className="shadow h-100">
                <CardBody className="d-flex justify-content-center align-items-center">
                  <Row>
                    <h5 className="pt-2 text-center"> 180000 </h5>
                    <h6 className="text-primary text-center">
                      Total Lends Amount
                    </h6>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col className="h-100">
              <Card className="shadow h-100">
                <CardBody className="d-flex justify-content-center align-items-center">
                  <Row>
                    <h5 className="pt-2 text-center"> 40000 </h5>
                    <h6 className="text-primary text-center">
                      Total Recovered Amount
                    </h6>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col className="h-100">
              <Card className="shadow h-100">
                <CardBody className="d-flex justify-content-center align-items-center">
                  <Row>
                    <h5 className="pt-2 text-center"> 180000 + 180000 </h5>
                    <h5 className="pt-2 text-center"> 198000 </h5>
                    <h6 className="text-success text-center">
                      Total Amount To Recover
                    </h6>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col className="h-100">
              <Card className="shadow h-100">
                <CardBody className="d-flex justify-content-center align-items-center">
                  <Row>
                    <h5 className="pt-1 text-center"> 40000 </h5>

                    <h6 className="text-danger text-center ">
                      Total Overdue Amount
                    </h6>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Row>
      ) : null}
    </>
  );
}
