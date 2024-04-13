import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, Alert, Row } from "reactstrap";
import { DeletePartyByID } from "../service/PartyService";

export default function DeletePartyModal({ party }) {
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

    console.log("id", party._id);
    try {
      const res = await DeletePartyByID(party._id);
      console.error("res", res);
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
      <Button color="danger" size="sm" onClick={toggle}>
        Delete
      </Button>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className=""
        backdrop={true}
        size="md"
      >
        <ModalHeader>
          <h2>Are you sure you want to delete this Party ?</h2>
        </ModalHeader>
        <ModalBody>
          {/* Alerts */}
          {isLoading ? (
            <Alert color="primary"> Loading . . .</Alert>
          ) : isSuccess ? (
            <Alert color="success"> Party Deleted</Alert>
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
          <div className="d-flex justify-content-center align-items-center">
            <img
              alt="..."
              className="rounded-circle"
              style={{ width: 50, height: 50 }}
              src={party.symbol}
            />
            <h4 className="text-center text-danger mx-3">{party.party}</h4>
          </div>

          <div className="mt-5 d-flex justify-content-center">
            <Button
              className="mx-2"
              color="secondary"
              onClick={() =>
                isError || isSuccess ? window.location.reload() : toggle()
              }
            >
              Cancel
            </Button>
            <Button color="danger" type="button" onClick={handleSubmit}>
              Delete
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
