import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, Alert, Row } from "reactstrap";
import CustomerForm from "./CustomerForm";
import { FiPlusCircle } from "react-icons/fi";
import GuarantorForm from "./GuarantorForm";

export default function NewGuarantorModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const [errMsage, setErrMsage] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    // submit form data to server or perform other actions

    try {
      // const res = await DeletePartyByID();
      // console.error("res", res);
      setIsLoading(false);
      setIsError(false);
      setIsSuccess(true);
      setSuccess(true);
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } catch (error) {
      setIsSuccess(false);
      setIsLoading(false);
      setIsError(true);
      console.log("error ddd", error);
      setErrMsage(error.message);
    }
  };

  const toggle = () => {
    setIsOpen(!isOpen);
    if (success) window.location.reload();
  };

  return (
    <>
      <FiPlusCircle color="blue" size={25} className="" onClick={toggle} />
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className=""
        backdrop={true}
        size="lg"
      >
        <ModalHeader>
          <h4 className="text-primary">Add Guarantor</h4>
        </ModalHeader>
        <ModalBody>
          {/* Alerts */}
          {isLoading ? (
            <Alert color="primary"> Loading . . .</Alert>
          ) : isSuccess ? (
            <Alert color="success"> Add Guarantor</Alert>
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

          <Row>
            <GuarantorForm />
          </Row>

          <div className="d-flex justify-content-end">
            <Button
              className="mx-2"
              color="secondary"
              onClick={() =>
                isError || isSuccess ? window.location.reload() : toggle()
              }
            >
              Cancel
            </Button>
            <Button color="success" type="button" onClick={handleSubmit}>
              Save
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
