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
import LockPlaceholderImage from "../../../assets/img/lock.jpg";

export default function SecurityForn() {
  const [securityType, setSecurityType] = useState("");
  const [files, setFiles] = useState(null);
  // const [gender, setGender] = useState(1);
  const [fullName, setFullName] = useState("");

  // Function to handle file selection
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles.map((file) => URL.createObjectURL(file))); // Store the URLs of the selected images
  };

  return (
    <>
      <Form>
        <Row className="mt-3">
          <Row>
            <Row>
              <FormGroup>
                <Label className="text-primary" for="security">
                  Security Type*
                </Label>
                <Input
                  type="select"
                  name="security"
                  id="security"
                  placeholder="Select security type"
                  value={securityType}
                  onChange={(e) => setSecurityType(e.target.value)}
                >
                  <option value="">Select security type</option>
                  <option value="Land">Land</option>
                  <option value="Cheques">Cheques</option>
                  <option value="Gold">Gold</option>
                  <option value="Vehicle">Vehicle</option>
                  <option value="Electric">Electric</option>
                  <option value="Mobile">Mobile</option>
                </Input>
              </FormGroup>
            </Row>
            {securityType === "Land" ? (
              <>
                <Row>
                  <FormGroup>
                    <Label className="text-primary" for="new-amount">
                      Document ID*
                    </Label>
                    <Input
                      type="text"
                      name="amount"
                      id="amount"
                      placeholder="Enter document id"
                      // value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup>
                    <Label className="text-primary" for="notes">
                      Notes
                    </Label>
                    <Input
                      type="text"
                      name="notes"
                      id="notes"
                      placeholder="Enter notes"
                      // value={"7000"}
                      // onChange={(e) => setFullName(e.target.value)}
                    />
                  </FormGroup>
                </Row>
              </>
            ) : null}

            {securityType === "Cheques" ? (
              <>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label className="text-primary" for="new-amount">
                        Bank*
                      </Label>
                      <Input
                        type="select"
                        name="amount"
                        id="amount"
                        placeholder="Enter Bank"
                        // value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      >
                        <option value="">Select Bank</option>
                        <option value="Bank 1">Bank 1</option>
                        <option value="Bank 2">Bank 2</option>
                        <option value="Bank 3">Bank 3</option>
                        <option value="Bank 4">Bank 4</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label className="text-primary" for="notes">
                        Branch*
                      </Label>
                      <Input
                        type="text"
                        name="notes"
                        id="notes"
                        placeholder="Enter branch"
                        // value={"7000"}
                        // onChange={(e) => setFullName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label className="text-primary" for="new-amount">
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
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label className="text-primary" for="notes">
                        Issue Date*
                      </Label>
                      <Input
                        type="date"
                        name="notes"
                        id="notes"
                        placeholder="Enter issue date"
                        // value={"7000"}
                        // onChange={(e) => setFullName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label className="text-primary" for="new-amount">
                        Cheque Number*
                      </Label>
                      <Input
                        type="text"
                        name="cheque-number"
                        id="cheque-number"
                        placeholder="Enter cheque-number"
                        // value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label className="text-primary" for="notes">
                        Account Date*
                      </Label>
                      <Input
                        type="date"
                        name="notes"
                        id="notes"
                        placeholder="Enter account date"
                        // value={"7000"}
                        // onChange={(e) => setFullName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </>
            ) : null}

            {securityType === "Gold" ? (
              <>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label className="text-primary" for="new-amount">
                        Jewelery Type*
                      </Label>
                      <Input
                        type="select"
                        name="amount"
                        id="amount"
                        placeholder="Enter Bank"
                        // value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      >
                        <option value="">Select jewelery type</option>
                        <option value="Jewelery type 1">Jewelery type 1</option>
                        <option value="Jewelery type 2">Jewelery type 2</option>
                        <option value="Jewelery type 3">Jewelery type 3</option>
                        <option value="Jewelery type 4">Jewelery type 4</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label className="text-primary" for="notes">
                        Weight*
                      </Label>
                      <Input
                        type="text"
                        name="notes"
                        id="notes"
                        placeholder="Enter weight"
                        // value={"7000"}
                        // onChange={(e) => setFullName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label className="text-primary" for="new-amount">
                        Carrot*
                      </Label>
                      <Input
                        type="text"
                        name="carrot"
                        id="carrot"
                        placeholder="Enter carrot"
                        // value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label className="text-primary" for="notes">
                        Damage Details*
                      </Label>
                      <Input
                        type="text"
                        name="notes"
                        id="notes"
                        placeholder="Enter damage details"
                        // value={"7000"}
                        // onChange={(e) => setFullName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </>
            ) : null}

            {securityType === "Vehicle" ? (
              <>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label className="text-primary" for="new-amount">
                        Vehicle Type*
                      </Label>
                      <Input
                        type="select"
                        name="amount"
                        id="amount"
                        placeholder="Enter Vehicle Type"
                        // value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      >
                        <option value="">Select vehicle type</option>
                        <option value="Vehicle Type 1">Vehicle Type 1</option>
                        <option value="Vehicle Type 2">Vehicle Type 2</option>
                        <option value="Vehicle Type 3">Vehicle Type 3</option>
                        <option value="Vehicle Type 4">Vehicle Type 4</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label className="text-primary" for="notes">
                        Registered Number*
                      </Label>
                      <Input
                        type="text"
                        name="notes"
                        id="notes"
                        placeholder="Enter registered  number"
                        // value={"7000"}
                        // onChange={(e) => setFullName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label className="text-primary" for="new-amount">
                        Chassis Number*
                      </Label>
                      <Input
                        type="text"
                        name="chassis-number"
                        id="chassis-number"
                        placeholder="Enter chassis number"
                        // value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label className="text-primary" for="notes">
                        Engine Number*
                      </Label>
                      <Input
                        type="text"
                        name="notes"
                        id="notes"
                        placeholder="Enter engine Number"
                        // value={"7000"}
                        // onChange={(e) => setFullName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FormGroup>
                      <Label className="text-primary" for="new-amount">
                        Damage Details*
                      </Label>
                      <Input
                        type="text"
                        name="chassis-number"
                        id="chassis-number"
                        placeholder="Enter damage details"
                        // value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Row>
                      <Col>
                        <FormGroup check>
                          <Label check className="text-primary">
                            <Input
                              type="checkbox"
                              id="book-flag"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  // Handle when the checkbox is checked
                                } else {
                                  // Handle when the checkbox is unchecked
                                }
                              }}
                            />{" "}
                            With Book Flag
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup check>
                          <Label check className="text-primary">
                            <Input
                              type="checkbox"
                              id="vehicle-flag"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  // Handle when the checkbox is checked
                                } else {
                                  // Handle when the checkbox is unchecked
                                }
                              }}
                            />{" "}
                            With Vehicle Flag
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                  <Col />
                </Row>
              </>
            ) : null}

            {securityType === "Electric" ? (
              <>
                <Row>
                  <FormGroup>
                    <Label className="text-primary" for="new-amount">
                      Description*
                    </Label>
                    <Input
                      type="text"
                      name="amount"
                      id="amount"
                      placeholder="Enter description"
                      // value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup>
                    <Label className="text-primary" for="notes">
                      Damage Details
                    </Label>
                    <Input
                      type="text"
                      name="damage-details"
                      id="damage-details"
                      placeholder="Enter damage details"
                      // value={"7000"}
                      // onChange={(e) => setFullName(e.target.value)}
                    />
                  </FormGroup>
                </Row>
              </>
            ) : null}

            {securityType === "Mobile" ? (
              <>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label className="text-primary" for="new-amount">
                        Description*
                      </Label>
                      <Input
                        type="text"
                        name="amount"
                        id="amount"
                        placeholder="Enter description"
                        // value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label className="text-primary" for="notes">
                        Make*
                      </Label>
                      <Input
                        type="text"
                        name="notes"
                        id="notes"
                        placeholder="Enter make"
                        // value={"7000"}
                        // onChange={(e) => setFullName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label className="text-primary" for="new-amount">
                        Model*
                      </Label>
                      <Input
                        type="text"
                        name="model"
                        id="model"
                        placeholder="Enter model"
                        // value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label className="text-primary" for="notes">
                        Damage Details*
                      </Label>
                      <Input
                        type="text"
                        name="notes"
                        id="notes"
                        placeholder="Enter damage details"
                        // value={"7000"}
                        // onChange={(e) => setFullName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </>
            ) : null}
          </Row>
          {/* Images */}
          <Row>
            <Row>
              <FormGroup>
                <Label className="text-primary" for="file">
                  Photos*
                </Label>
                <Input
                  type="file"
                  name="fiel"
                  id="fiel"
                  multiple
                  onChange={handleFileChange}
                />
              </FormGroup>
            </Row>
            <Row className=" ">
              {files && files.length > 0 ? (
                files.map((file, index) => (
                  <Col lg={4}>
                    <img
                      key={index}
                      src={file}
                      alt={`Uploaded ${index + 1}`}
                      className="w-100 border rounded-3 p-0"
                    />
                  </Col>
                ))
              ) : (
                <Col className="d-flex justify-content-center">
                  <img
                    src={LockPlaceholderImage}
                    alt="Placeholder"
                    className="w-40 border rounded-3 p-0"
                  />
                </Col>
              )}
            </Row>
          </Row>
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
