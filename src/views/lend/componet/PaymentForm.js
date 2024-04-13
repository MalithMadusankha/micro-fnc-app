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
import UserPlaceholderImage from "../../../assets/img/user-paceholder.jpg";

export default function PaymentForm() {
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
                <Label className="text-primary" for="payment-type">
                  Payment Type*
                </Label>
                <Input
                  type="select"
                  name="payment-type"
                  id="payment-type"
                  placeholder="Enter payment type"
                  // value={fullName}
                  // onChange={(e) => setFullName(e.target.value)}
                >
                  <option value="">Select payment type</option>
                  <option value="Broker">Broker</option>
                  <option value="Lawyer">Lawyer</option>
                  <option value="Document">Document</option>
                  <option value="Other">Other</option>
                </Input>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label className="text-primary" for="new-amount">
                  Broker*
                </Label>
                <Input
                  type="select"
                  name="amount"
                  id="amount"
                  placeholder="Enter name"
                  // value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                >
                  <option value="">Select broker</option>
                  <option value="Broker 1">Broker 1</option>
                  <option value="Broker 2">Broker 2</option>
                  <option value="Broker 3">Broker 3</option>
                </Input>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label className="text-primary" for="lend-id">
                  Lend ID
                </Label>
                <Input
                  type="text"
                  name="lend-id"
                  id="lend-id"
                  placeholder="Enter lend id"
                  // value={"7000"}
                  // onChange={(e) => setFullName(e.target.value)}
                >
                  <option value="">Select lend id</option>
                  <option value="LED0001">LED0001</option>
                  <option value="LED0002">LED0002</option>
                  <option value="LED0003">LED0003</option>
                </Input>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label className="text-primary" for="amount">
                  Amount*
                </Label>
                <Input
                  type="text"
                  name="amount"
                  id="amount"
                  placeholder="Enter amount"
                  // value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </FormGroup>
            </Row>
          </Col>

          <Col>
            <Row className="mt-2">
              <Col>
                <Card className="bg-primary text-white">
                  <CardBody>
                    <p className="m-0"> Total Amount To Paid</p>
                    <h5>25000</h5>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Card className="bg-primary text-white">
                  <CardBody>
                    <p className="m-0"> Total Lends Brought</p>
                    <h5>4</h5>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* <Row>
          <Col>
            <div className="mt-4">
              <Button color="success" type="submit">
                Save
              </Button>
            </div>
          </Col>
        </Row> */}
      </Form>
    </>
  );
}
