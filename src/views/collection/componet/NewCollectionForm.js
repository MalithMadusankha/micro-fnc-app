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

export default function NewCollectionForm() {
  const [relend, setRelend] = useState("");
  const [newAmount, setNewAmount] = useState("");
  // const [gender, setGender] = useState(1);
  const [fullName, setFullName] = useState("");

  return (
    <>
      <Form>
        <Row className="mb-5">
          <Col>
            <Row>
              <FormGroup>
                <Label className="text-primary" for="payment-type">
                  Lend ID*
                </Label>
                <Input
                  type="select"
                  name="payment-type"
                  id="payment-type"
                  placeholder="Enter Lend ID"
                  // value={fullName}
                  // onChange={(e) => setFullName(e.target.value)}
                >
                  <option value="">Select lend id</option>
                  <option value="LEN0001">LEN0001</option>
                  <option value="LEN0002">LEN0002</option>
                  <option value="LEN0003">LEN0003</option>
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

            <Row>
              <FormGroup>
                <Label className="text-primary" for="lend-id">
                  Discount
                </Label>
                <Input
                  type="text"
                  name="lend-id"
                  id="lend-id"
                  placeholder="Enter discount"
                  // value={"7000"}
                  // onChange={(e) => setFullName(e.target.value)}
                />
              </FormGroup>
            </Row>
          </Col>

          <Col>
            <Row className="mt-2">
              <Col>
                <Card className="bg-primary text-white">
                  <CardBody>
                    <p className="m-0"> Amount To Collect</p>
                    <h5>600</h5>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Card className="bg-primary text-white">
                  <CardBody>
                    <p className="m-0"> Collection Date</p>
                    <h5>2024-04-30</h5>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Card className="bg-primary text-white">
                  <CardBody>
                    <p className="m-0"> Next Collection Date</p>
                    <h5>2024-05-30</h5>
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
