import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Alert,
  Card,
  CardBody,
} from "reactstrap";
import NewGuarantorModal from "./NewGuarantorModal";
import NewBrokerModal from "./NewBrokerModal";
import NewLawyerModal from "./NewLawyerModal";
import NewPaymentModal from "./NewPaymentModal";

export default function NewLendForm() {
  const [relend, setRelend] = useState("");
  const [newAmount, setNewAmount] = useState("");
  // const [gender, setGender] = useState(1);
  const [fullName, setFullName] = useState("");

  return (
    <>
      <Form>
        <Row className="mt-3">
          <Col>
            <Row>
              <FormGroup>
                <Label className="text-primary" for="date">
                  Date*
                </Label>
                <Input
                  type="date"
                  name="date"
                  id="date"
                  placeholder="Enter nic"
                  // value={fullName}
                  // onChange={(e) => setFullName(e.target.value)}
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label className="text-primary" for="type">
                  Collection Type*
                </Label>
                <Input
                  type="select"
                  name="type"
                  id="type"
                  placeholder="Enter name"
                  // value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                >
                  <option value="">Select collection type</option>
                  <option value="Daily">Daily</option>
                  <option value="Monthly">Monthly</option>
                </Input>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label className="text-primary" for="lend-amount">
                  Lebd Amount
                </Label>
                <Input
                  type="text"
                  name="lend-amount"
                  id="lend-amount"
                  placeholder="Enter lend amount"
                  // value={"7000"}
                  // onChange={(e) => setFullName(e.target.value)}
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label className="text-primary" for="interest-rate">
                  Interest Rate*
                </Label>
                <Input
                  type="text"
                  name="interest-rate"
                  id="interest-rate"
                  placeholder="Enter interest rate"
                  // value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label className="text-primary" for="expire-date">
                  Expire Date*
                </Label>
                <Input
                  type="date"
                  name="expire-date"
                  id="expire-date"
                  placeholder="Enter expire date"
                  // value={fullName}
                  // onChange={(e) => setFullName(e.target.value)}
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label className="text-primary" for="interest-amount">
                  Interest Amount
                </Label>
                <Input
                  type="text"
                  name="interest-amount"
                  id="interest-amount"
                  placeholder="ex: 700"
                  disabled
                  // value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </FormGroup>
            </Row>

            <Row>
              <FormGroup>
                <Label className="text-primary" for="total-recover-amount">
                  Total Recover Amount
                </Label>
                <Input
                  type="text"
                  name="total-recover-amount"
                  id="total-recover-amount"
                  placeholder="ex: 8000"
                  disabled
                  // value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </FormGroup>
            </Row>
          </Col>

          <Col className="d-flex align-items-center">
            <Row>
              <Col className="m-3" lg={10}>
                <Row className="mt-1 me-1">
                  <Card className="shadow ">
                    <CardBody className="">
                      <Row>
                        <div className="d-flex justify-content-between">
                          <h5 className="text-primary text-left">Guarantors</h5>
                          <NewGuarantorModal />
                        </div>
                        <h6 className="text-center"> Guarantor 1 </h6>
                        <h6 className="text-center"> Guarantor 2 </h6>
                      </Row>
                    </CardBody>
                  </Card>
                </Row>
              </Col>

              <Col className="m-3" lg={10}>
                <Row className="mt-1 me-1">
                  <Card className="shadow ">
                    <CardBody className="">
                      <Row>
                        <div className="d-flex justify-content-between">
                          <h5 className="text-primary text-left">Brokers</h5>
                          <NewBrokerModal />
                        </div>
                        <h6 className="text-center"> Broker 1 </h6>
                        <h6 className="text-center"> Broker 2 </h6>
                      </Row>
                    </CardBody>
                  </Card>
                </Row>
              </Col>

              <Col className="m-3" lg={10}>
                <Row className="mt-1 me-1">
                  <Card className="shadow ">
                    <CardBody className="">
                      <Row>
                        <div className="d-flex justify-content-between">
                          <h5 className="text-primary text-left">Lawyers</h5>
                          <NewLawyerModal />
                        </div>
                        <h6 className="text-center"> Lawyer 1 </h6>
                        <h6 className="text-center"> Lawyer 2 </h6>
                      </Row>
                    </CardBody>
                  </Card>
                </Row>
              </Col>

              <Col className="m-3" lg={10}>
                <Row className="mt-1 me-1">
                  <Card className="shadow ">
                    <CardBody className="">
                      <Row>
                        <div className="d-flex justify-content-between">
                          <h5 className="text-primary text-left">Payments</h5>
                          <NewPaymentModal />
                        </div>
                        <h6 className="text-center"> Document Chargers </h6>
                        <h6 className="text-center"> Stamp Dutes </h6>
                      </Row>
                    </CardBody>
                  </Card>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="mt-4">
              <Button color="success" type="submit">
                Save
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
}
