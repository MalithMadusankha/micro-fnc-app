import React from "react";
import { Card, Col, Row, CardBody, Badge, Button } from "reactstrap";
import UserLendImage from "../../../assets/img/user-lend.jpg";
import ProfileViewModal from "./ProfileViewModal";
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
          <Col key={key} lg={2}>
            <Card className="shadow">
              <CardBody className="pb-0">
                <Row>
                  <Col>
                    {next.isOverDue ? (
                      <Badge color="danger">Over Due</Badge>
                    ) : (
                      <Badge color="success">Current</Badge>
                    )}
                  </Col>
                  <Col>
                    <h1 className="pt-2"> {next.amount}</h1>
                  </Col>
                  <Row>
                    <Col>
                      <p style={{ fontSize: 13 }}> {next.date}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p style={{ fontSize: 13 }}> {next.jobId}</p>
                    </Col>
                  </Row>
                </Row>
              </CardBody>
            </Card>
          </Col>
        ))}
        {lending && lending.length > 0 ? (
          <Col lg={2}>
            <Card className="shadow h-100">
              <CardBody>
                <Row>
                  <img src={UserLendImage} alt="lend-user" className="h-100" />
                </Row>
                <Row>
                  <ProfileViewModal lending={lending[0]} />
                </Row>
              </CardBody>
            </Card>
          </Col>
        ) : null}
      </Row>
    </>
  );
}
