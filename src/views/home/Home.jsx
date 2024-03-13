import React, { useState } from "react";
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
  Badge,
} from "reactstrap";
import { FaSearch } from "react-icons/fa";
import NEXT_COLLECTIONS, { LEANDING_COLLECTION } from "../../assets/data.js";
import LendingTable from "./componet/LendingTable.js";

export default function Home() {
  const [data, setData] = useState([]);
  const [lending, setLending] = useState([]);

  return (
    <>
      <div className="content-fluid mt-3">
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
                      <Col md={5} lg={8}>
                        <Label className="visually-hidden" for="search">
                          Search
                        </Label>
                        <Input
                          id="search"
                          name="search"
                          placeholder="search"
                          type="search"
                        />
                      </Col>
                      <Col>
                        <FormGroup check>
                          <Input type="radio" name="searchType" /> NIC
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup check>
                          <Input type="radio" name="searchType" /> Job ID
                        </FormGroup>
                      </Col>
                      <Col>
                        <Button
                          onClick={() => {
                            setData(NEXT_COLLECTIONS);
                            setLending(LEANDING_COLLECTION);
                          }}
                          color="info"
                          className="text-white"
                        >
                          <FaSearch /> Search
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* Next Collection */}
        <Row className="mt-4">
          <Col>
            <h5> Next Collections</h5>
          </Col>
          <Col>
            <h5 className="text-right text-danger pr-1">
              {data && data.length > 0
                ? "Total Next Collection : " +
                  NEXT_COLLECTIONS.reduce(
                    (total, item) => total + item.amount,
                    0
                  )
                : ""}
            </h5>
          </Col>
        </Row>
        <Row className="mt-2">
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
                  </Row>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        {/* Leanding */}
        <Row className="mt-4">
          <Col>
            <h5> Lending History</h5>
          </Col>
          <Col>
            <h5 className="text-right text-danger pr-1">
              {data && data.length > 0 ? "Total Lending : " + 15050 : ""}
            </h5>
          </Col>
        </Row>
        {lending && lending.length > 0 ? (
          <Row className="mt-2 mb-4">
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
    </>
  );
}
