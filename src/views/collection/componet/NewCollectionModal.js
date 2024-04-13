import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, Alert, Row } from "reactstrap";
import NewCollectionForm from "./NewCollectionForm";

export default function NewCollectionModal() {
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
      {/* <FiPlusCircle color="blue" size={25} className="" onClick={toggle} /> */}
      <Button color="primary" size="sm" className="me-3" onClick={toggle}>
        New Collection
      </Button>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className=""
        backdrop={true}
        size="lg"
      >
        <ModalHeader>
          <h4 className="text-primary">New Collection</h4>
        </ModalHeader>
        <ModalBody>
          {/* Alerts */}
          {isLoading ? (
            <Alert color="primary"> Loading . . .</Alert>
          ) : isSuccess ? (
            <Alert color="success"> New Collection</Alert>
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
            <NewCollectionForm />
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
            <Button
              className="me-2"
              color="warning"
              type="button"
              onClick={handleSubmit}
            >
              Settle
            </Button>
            <Button color="success" type="button" onClick={handleSubmit}>
              Collect
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
