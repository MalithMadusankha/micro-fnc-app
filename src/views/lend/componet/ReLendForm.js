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
// import { CreateRelend } from "../service/RelendService";

export default function ReLendForm({ toggle, setSuccess }) {
  const [relend, setRelend] = useState("29700");
  const [newAmount, setNewAmount] = useState("36000");
  // const [gender, setGender] = useState(1);
  const [fullName, setFullName] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [electionNo, setElectionNo] = useState("");

  const [errMsage, setErrMsage] = useState([]);
  const [errCandidates, setErrCandidates] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const addCandidates = () => {
    if (fullName === "" || electionNo === "") {
      setErrCandidates("Please fill required fields");
      return 0;
    }
    setErrCandidates("");

    let temArr = [...candidates];
    temArr.push({
      fullName,
      electionNo,
    });
    console.log("temArr", temArr);
    setCandidates(temArr);
    setFullName("");
    setElectionNo("");
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];

  //   setSymbol(file);
  //   // You can add your upload logic here
  //   if (file) {
  //     console.log("Selected File:", file);
  //     // Add your upload logic here
  //   } else {
  //     console.error("No file selected.");
  //   }
  // };

  const removeElement = (i) => {
    console.log("re", i);
    let temArr = [...candidates];
    temArr.splice(i, 1);
    setCandidates(temArr);
    console.log("temArr", temArr);
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   // submit form data to server or perform other actions
  //   let obj = {
  //     Relend,
  //     symbol,
  //     candidates,
  //   };

  //   const formData = new FormData();
  //   formData.append("Relend", Relend);
  //   formData.append("candidates", JSON.stringify(candidates));
  //   formData.append("file", symbol);
  //   console.log(obj);
  //   console.log("formData", formData);

  //   try {
  //     const res = await CreateRelend(formData);
  //     console.log("res", res);
  //     setIsLoading(false);
  //     setIsError(false);
  //     setIsSuccess(true);
  //     setSuccess(true);
  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 5000);
  //   } catch (error) {
  //     setIsSuccess(false);
  //     setIsLoading(false);
  //     setIsError(true);
  //     console.log("error ", error);
  //     setErrMsage(error.response.data.message);
  //   }
  // };

  return (
    <>
      <Form>
        {/* Alerts */}
        {isLoading ? (
          <Alert color="primary"> Loading . . .</Alert>
        ) : isSuccess ? (
          <Alert color="success"> Relend Created</Alert>
        ) : (
          isError && (
            <div>
              {errMsage.map((err, index) => (
                <Row key={index}>
                  <Alert color="danger"> {err}</Alert>
                </Row>
              ))}
            </div>
          )
        )}

        <Row className="mt-3">
          <Col>
            <FormGroup>
              <Label className="text-primary" for="blance">
                Additional Lend Amount*
              </Label>
              <Input
                type="text"
                name="blance"
                id="blance"
                placeholder="Enter amount"
                // value={fullName}
                // onChange={(e) => setFullName(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="new-amount">
                Rate* (Enable for partial)
              </Label>
              <Input
                type="text"
                name="amount"
                id="amount"
                placeholder="Enter rate"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="blance">
                New Interest Amount
              </Label>
              <Input
                type="text"
                name="blance"
                id="blance"
                disabled
                value={"7000"}
                // onChange={(e) => setFullName(e.target.value)}
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label className="text-primary" for="new-amount">
                Extended Expire Date*
              </Label>
              <Input
                type="date"
                name="amount"
                id="amount"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label className="text-primary" for="new-amount">
                Extended Days
              </Label>
              <Input
                type="text"
                name="amount"
                id="amount"
                disabled
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="blance">
                Blance Amount
              </Label>
              <Input
                type="text"
                name="blance"
                id="blance"
                disabled
                value={relend}
                onChange={(e) => setRelend(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="new-amount">
                New Amount To Recover
              </Label>
              <Input
                type="text"
                name="amount"
                id="amount"
                disabled
                value={newAmount}
                onChange={(e) => setRelend(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <div
              className="d-flex justify-content-end"
              style={{ marginTop: 33 }}
            >
              <Button
                className="mx-2"
                color="secondary"
                onClick={() =>
                  isError || isSuccess ? window.location.reload() : toggle()
                }
              >
                Cancel
              </Button>
              <Button color="success" type="submit">
                Submit
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
}
