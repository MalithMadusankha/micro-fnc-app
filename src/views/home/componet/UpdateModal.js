import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

// import UpdateInvestigatorForm from "./UpdateInvestigatorForm";

export default function UpdateModal({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    if (success) window.location.reload();
  };

  return (
    <>
      <Button color="success" size="sm" onClick={toggle}>
        Update
      </Button>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className=""
        backdrop={true}
        size="lg"
      >
        <ModalHeader toggle={toggle}>Update Patient</ModalHeader>
        <ModalBody>
          Update
          {/* <UpdateInvestigatorForm
            user={user}
            toggle={toggle}
            setSuccess={setSuccess}
          /> */}
        </ModalBody>
      </Modal>
    </>
  );
}
