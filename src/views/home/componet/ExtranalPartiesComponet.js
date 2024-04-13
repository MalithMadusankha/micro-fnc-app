import React from "react";
import { Card, Col, Row, CardBody } from "reactstrap";

export default function ExtranalPartiesComponet() {
  return (
    <div>
      <Row>
        <Col lg={3}>
          <Row className="mt-1 me-1 h-100">
            <Card className="shadow ">
              <CardBody className="d-flex justify-content-center align-items-center">
                <Row>
                  <h5 className="text-success text-center">Guarantors</h5>
                  <h6 className="text-center"> Guarantor 1 </h6>
                  <h6 className="text-center"> Guarantor 2 </h6>
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
                  <h5 className="text-success text-center">Brokers </h5>
                  <h6 className="text-center"> Broker 1 </h6>
                  <h6 className="text-center"> Broker 2 </h6>
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
                  <h5 className="text-success text-center">Lawyers </h5>
                  <h6 className="text-center"> Lawyer 1 </h6>
                  <h6 className="text-center"> Lawyer 2 </h6>
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
                  <h5 className="text-success text-center">Payemnts </h5>
                  <h6 className="text-center"> Document Charges </h6>
                  <h6 className="text-center"> Stamp Duties </h6>
                </Row>
              </CardBody>
            </Card>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
