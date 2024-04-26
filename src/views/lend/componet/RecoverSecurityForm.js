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
import MobileImg from "../../../assets/img/mobile-1.jpg";
export default function RecoverSecurityForm({ toggle, setSuccess }) {
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

        <Row className="bg-primary text-white pt-3">
          <Row>
            <Col className="text-center">
              <p className="my-0">Lend ID</p>
              <h5>1567</h5>
            </Col>
            <Col className="text-center">
              <p className="my-0">Total Amount To Paid</p>
              <h5>25000</h5>
            </Col>
            <Col className="text-center">
              <p className="my-0">Total Over Due Amount</p>
              <h5>98</h5>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className="text-center">
              <p className="my-0">Deal Settel Date</p>
              <h5>2024-02-15</h5>
            </Col>
            <Col className="text-center">
              <p className="my-0">Deal Expire Date</p>
              <h5>2024-02-15</h5>
            </Col>
            <Col className="text-center">
              <p className="my-0">Over Due Scinc</p>
              <h5>2024-02-15</h5>
            </Col>
          </Row>
        </Row>

        <Row className="mt-3">
          <Col>
            <FormGroup>
              <Label className="text-primary" for="new-amount">
                Extra hand Over Amount
              </Label>
              <Input
                type="text"
                name="amount"
                id="amount"
                placeholder="Enter amount"
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
                Note
              </Label>
              <Input
                type="textarea"
                name="blance"
                id="blance"
                // onChange={(e) => setFullName(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button className="me-3" color="primary">
              {" "}
              View Profile
            </Button>

            {/* <Button color="success"> Done</Button> */}
          </Col>
        </Row>

        <Row className="mt-4">
          <h4> Security Details</h4>
          <Row className="mt-2">
            <Col className=" d-flex justify-content-center align-items-center w-100 h-100 bordered-div ms-2">
              <p className="text-center">Registered Security Details</p>
            </Col>

            <Col>
              <img className="w-100" src={MobileImg} alt="security" />
            </Col>
          </Row>
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
                Done
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
}
