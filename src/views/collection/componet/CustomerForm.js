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

export default function CustomerForm() {
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
                <Label className="text-primary" for="blance">
                  NIC*
                </Label>
                <Input
                  type="text"
                  name="blance"
                  id="blance"
                  placeholder="Enter nic"
                  // value={fullName}
                  // onChange={(e) => setFullName(e.target.value)}
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label className="text-primary" for="new-amount">
                  Name*
                </Label>
                <Input
                  type="text"
                  name="amount"
                  id="amount"
                  placeholder="Enter name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label className="text-primary" for="address">
                  Address*
                </Label>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter address"
                  // value={"7000"}
                  // onChange={(e) => setFullName(e.target.value)}
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label className="text-primary" for="mobile">
                  Mobile*
                </Label>
                <Input
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="Enter mobile"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <Label className="text-primary" for="home">
                  Home
                </Label>
                <Input
                  type="text"
                  name="home"
                  id="home"
                  placeholder="Enter home"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </FormGroup>
            </Row>
          </Col>
          {/* Image */}
          <Col>
            <Row>
              <FormGroup>
                <Label className="text-primary" for="file">
                  Photo*
                </Label>
                <Input
                  type="file"
                  name="fiel"
                  id="fiel"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </FormGroup>
            </Row>
            <Row className="d-flex justify-content-center align-items-center">
              <img
                src={UserPlaceholderImage}
                alt="customer"
                className="w-65 border rounded-3 p-0"
              />
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
