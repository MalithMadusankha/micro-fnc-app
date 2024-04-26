import React from "react";
import { Card, Col, Row, CardBody, Badge, Button } from "reactstrap";
export default function NextCollectionComponet({ data, lending }) {
  return (
    <>
      <Row className="mt-4">
        <Col>
          <h5 className="text-primary"> Next Collections</h5>
        </Col>
        <Col>
          <h5 className="text-right text-danger pr-1">
            {data && data.length > 0
              ? "Total Next Collection : " +
                data.reduce((total, item) => total + item.amount, 0)
              : ""}
          </h5>
        </Col>
      </Row>
      <Row className="m-3">
        {data.map((next, key) => (
          <Col key={key} md={4} lg={3}>
            <Card className="shadow h-100">
              <CardBody className="pb-0">
                <div className="justify-content-center align-item-center">
                  <Col
                    className={`${
                      next.isOverDue ? "bg-danger" : "bg-success"
                    } text-center text-white`}
                  >
                    <h6> {next.jobId}</h6>
                  </Col>
                </div>
                <Row>
                  <Col className="text-primary">
                    <h6>Next {next.date}</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h1
                      className={
                        next.isOverDue
                          ? "text-denger text-right"
                          : "text-success text-right"
                      }
                    >
                      {" "}
                      {next.amount}
                    </h1>
                  </Col>
                </Row>
                {next.isOverDue ? (
                  <Row>
                    <Col className="text-primary">
                      <h6>2024-02-05</h6>
                    </Col>
                  </Row>
                ) : null}
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
