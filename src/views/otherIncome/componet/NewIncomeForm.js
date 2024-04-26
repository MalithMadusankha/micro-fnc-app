import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Alert,
} from "reactstrap";

export default function NewIncomeForm() {
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
                  Income Type*
                </Label>
                <Input
                  type="select"
                  name="payment-type"
                  id="payment-type"
                  placeholder="Enter Lend ID"
                  // value={fullName}
                  // onChange={(e) => setFullName(e.target.value)}
                >
                  <option value="">Select income type</option>
                  <option value="Jewellery">Jewellery</option>
                  <option value="Other">Other</option>
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
                  Note
                </Label>
                <Input
                  type="textarea"
                  name="lend-id"
                  id="lend-id"
                  placeholder="Enter discount"
                  // value={"7000"}
                  // onChange={(e) => setFullName(e.target.value)}
                />
              </FormGroup>
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
